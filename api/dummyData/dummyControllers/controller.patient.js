const fs = require('fs');
const path = require('node:path');
let data = fs.readFileSync(path.join(__dirname, '..', 'dummyModels', 'Patient.json'));
let Patients= JSON.parse(data);

const controllerPatients = {
  
  getAll: async (req, res, next) => {
    try {
      res.status(200).send({ data: Patients });
    } catch (error) {
      console.log(error);
    }
  },
  createPatient: async (req, res, next) => {
    const { name, email, password, phoneNumber,image } = req.body;
    let letters = "0123456789ABCDEF";
    var objectId = "630fff";
    for (var i = 0; i < 8; i++) {
      objectId += letters[Math.floor(Math.random() * 16)];
    }
    const newPatient = {
      id: objectId,
      name,
      email,
      password,
      phoneNumber,
      image,
      active: true,
    };
    try {
      Patients.push(newPatient);
      let jsonPatients = JSON.stringify(Patients);
      fs.writeFile(path.join(__dirname, '..', 'dummyModels', 'Patient.json'), jsonPatients, (err) => {
        if (err) throw err;
        console.log("Patient created");
      });
      res.status(200).send({ newPatient: newPatient });
    } catch (error) {
      console.log(error);
    }
  },
  getPatient: async (req, res, next) => {
    const { idPatient } = req.params;
    try {
      const patientFound = Patients.find((patient) => patient.id === idPatient);
      console.log(patientFound);
      res.status(200).send({ data: patientFound });
    } catch (error) {
      console.log(error);
    }
  },
  updatePatient: async (req, res, next) => {
    const { idPatient } = req.params;
    const { name, email, password, phoneNumber, image } = req.body;
    try {
      const patientFound = Patients.find((patient) => patient.id === idPatient);
      patientFound.name = name;
      patientFound.email = email;
      patientFound.password = password;
      patientFound.phoneNumber = phoneNumber;
      patientFound.image = image;
      let jsonPatients = JSON.stringify(Patients);
      fs.writeFile(path.join(__dirname, '..', 'dummyModels', 'Patient.json'), jsonPatients, (err) => {
        if (err) throw err;
        console.log("Patient updated");
      });
      res.status(200).send({ data: patientFound });
    } catch (error) {
      console.log(error);
    }
  },
  deletePatient: async (req, res, next) => {
    const { idPatient } = req.params;
    try {
      const patientFound = Patients.find((patient) => patient.id === idPatient);
      patientFound.active = false;
      let jsonPatients = JSON.stringify(Patients);
      fs.writeFile(path.join(__dirname, '..', 'dummyModels', 'Patient.json'), jsonPatients, (err) => {
        if (err) throw err;
        console.log("Patient banned");
      });
      res.status(200).send({ data: patientFound });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = controllerPatients;
