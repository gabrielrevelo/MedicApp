const fs = require('fs');
const path = require('node:path');
let data = fs.readFileSync(path.join(__dirname, '..', 'dummyModels', 'Doctor.json'));
let Doctors= JSON.parse(data);

const controllerDoctors = {
  getAll: async (req, res, next) => {
    try {
      res.status(200).send({ data: Doctors });
    } catch (error) {
      console.log(error);
    }
  },
  createDoctor: async (req, res, next) => {
    const { name, specialities, license, country, city, address, hour, space, checkUpPrice, email, password, phoneNumber, image } = req.body;
    let letters = "0123456789ABCDEF";
    var objectId = "630fff";
    for (var i = 0; i < 8; i++) {
      objectId += letters[Math.floor(Math.random() * 16)];
    }
    const newDoctor = {
      id: objectId,
      name,
      specialities,
      license,
      country,
      city,
      address,
      email,
      password,
      phoneNumber,
      schedule:[
        {
          hour,
          space,
          checkUpPrice
        }
      ],
      active: true,
      rating: 0,
      image,
    };
    try {
      Doctors.push(newDoctor);
      let jsonDoctors = JSON.stringify(Doctors);
      fs.writeFile(path.join(__dirname, '..', 'dummyModels', 'Doctor.json'), jsonDoctors, (err) => {
        if (err) throw err;
        console.log("Doctor created");
      });
      res.status(200).send({ newDoctor: newDoctor });
    } catch (error) {
      console.log(error);
    }

  },
  getDoctor: async (req, res, next) => {
    const { idDoctor } = req.params;
    try {
      const DoctorFound = Doctors.find((Doctor) => Doctor.id === idDoctor);
      console.log(DoctorFound);
      res.status(200).send({ data: DoctorFound });
    } catch (error) {
      console.log(error);
    }
  },
  updateDoctor: async (req, res, next) => {
    const { idDoctor } = req.params;
    const { name, specialities, license, address,country,city, hour, space, checkUpPrice, email, password, phoneNumber, image } = req.body;
    try {
      const DoctorFound = Doctors.find((Doctor) => Doctor.id === idDoctor);
      DoctorFound.name = name;
      DoctorFound.specialities = specialities;
      DoctorFound.license = license;
      DoctorFound.country = country;
      DoctorFound.city = city;
      DoctorFound.address = address;
      DoctorFound.address = address;
      DoctorFound.schedule[0].hour = hour;
      DoctorFound.schedule[0].space = space;
      DoctorFound.schedule[0].checkUpPrice = checkUpPrice;
      DoctorFound.email = email;
      DoctorFound.password = password;
      DoctorFound.phoneNumber = phoneNumber;
      DoctorFound.image = image;
      let jsonDoctors = JSON.stringify(Doctors);
      fs.writeFile(path.join(__dirname, '..', 'dummyModels', 'Doctor.json'), jsonDoctors, (err) => {
        if (err) throw err;
        console.log("Doctor updated");
      });
      res.status(200).send({ data: DoctorFound });
    } catch (error) {
      console.log(error);
    }
  },
  deleteDoctor: async (req, res, next) => {
    const { idDoctor } = req.params;
    try {
      const DoctorFound = Doctors.find((Doctor) => Doctor.id === idDoctor);
      DoctorFound.active = false;
      let jsonDoctors = JSON.stringify(Doctors);
      fs.writeFile(path.join(__dirname, '..', 'dummyModels', 'Doctor.json'), jsonDoctors, (err) => {
        if (err) throw err;
        console.log("Doctor banned");
      });
      res.status(200).send({ data: DoctorFound });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = controllerDoctors;
