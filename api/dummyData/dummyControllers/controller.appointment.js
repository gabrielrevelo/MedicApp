const fs = require('fs');
const path = require('node:path');
let data = fs.readFileSync(path.join(__dirname, '..', 'dummyModels', 'Appointment.json'));
let dataPatients = fs.readFileSync(path.join(__dirname, '..', 'dummyModels', 'Patient.json'));
let dataDoctors = fs.readFileSync(path.join(__dirname, '..', 'dummyModels', 'Doctor.json'));
let Appointments = JSON.parse(data);
let Patients = JSON.parse(dataPatients);
let Doctors = JSON.parse(dataDoctors);

const controllerAppointments = {
  getAll: async (req, res, next) => {
    try {
      let data = [];
      for (let i = 0; i < Appointments.length; i++) {
        const patientsData = await Patients.find((Patient) => Patient.id === Appointments[i].idPatient);
        const doctorsData = await Doctors.find((Doctor) => Doctor.id === Appointments[i].idDoctor);
        const addAppointment = {
        id : Appointments[i].id,
        patientName: patientsData.name,
        patientEmail: patientsData.email,
        doctorName: doctorsData.name,
        doctorEmail: doctorsData.email,
        doctorSpecialities: doctorsData.specialities,
        hourAppointment: Appointments[i].hour,
        timeAppointment: doctorsData.schedule[0].space + " min",
        priceAppointment: doctorsData.schedule[0].checkUpPrice,
        cityAppointment: doctorsData.city,
        countryAppointment: doctorsData.country,
        adressAppointment: doctorsData.address,
        date: Appointments[i].date,
        additionalComment: Appointments[i].additionalComment
        } 
        data.push(addAppointment);
      }
      res.status(200).send({ data: data });
    } catch (error) {
      console.log(error);
    }
  },

  createAppointment: async (req, res, next) => {
    const { idDoctor, idPatient, date, additionalComment } = req.body;
    let letters = "0123456789ABCDEF";
    var objectId = "630fff";
    for (var i = 0; i < 8; i++) {
      objectId += letters[Math.floor(Math.random() * 16)];
    }
    const newAppointment = {
      id: objectId,
      idDoctor,
      idPatient,
      date,
      additionalComment,
      active: true,
    };
    try {
      Appointments.push(newAppointment);
      let jsonAppointments = JSON.stringify(Appointments);
      fs.writeFile(path.join(__dirname, '..', 'dummyModels', 'Appointment.json'), jsonAppointments, (err) => {
        if (err) throw err;
        console.log("Appointment created");
      });
      res.status(200).send({ newAppointment: newAppointment });
    } catch (error) {
      console.log(error);
    }
  },
  getAppointment: async (req, res, next) => {
    const { idAppointment } = req.params;
    try {
      const AppointmentFound = await Appointments.find((Appointment) => Appointment.id === idAppointment);
      const patientsData = await Patients.find((Patient) => Patient.id === AppointmentFound.idPatient);
      const doctorsData = await Doctors.find((Doctor) => Doctor.id === AppointmentFound.idDoctor);
      const getAppointment = {
        id : AppointmentFound.id,
        patientName: patientsData.name,
        patientEmail: patientsData.email,
        doctorName: doctorsData.name,
        doctorEmail: doctorsData.email,
        doctorSpecialities: doctorsData.specialities,
        hourAppointment: AppointmentFound.hour,
        timeAppointment: doctorsData.schedule[0].space + " min",
        priceAppointment: doctorsData.schedule[0].checkUpPrice,
        adressAppointment: doctorsData.address,
        cityAppointment: doctorsData.city,
        countryAppointment: doctorsData.country,
        date: AppointmentFound.date,
        additionalComment: AppointmentFound.additionalComment
      }

      res.status(200).send({ data: getAppointment });
    } catch (error) {
      console.log(error);
    }
  },
  deleteAppointment: async (req, res, next) => {
    const { idAppointment } = req.params;
    try {
      const AppointmentFound = Appointments.find((Appointment) => Appointment.id === idAppointment);
      AppointmentFound.active = false;
      let jsonAppointments = JSON.stringify(Appointments);
      fs.writeFile(path.join(__dirname, '..', 'dummyModels', 'Appointment.json'), jsonAppointments, (err) => {
        if (err) throw err;
        console.log("Appointment deleted");
      });
      res.status(200).send({ data: AppointmentFound });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = controllerAppointments;
