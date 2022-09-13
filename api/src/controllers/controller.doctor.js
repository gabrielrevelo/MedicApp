const Doctor = require("../models/Doctor");
const mailer = require("../config/sendMails/mailer");
const bcrypt = require('bcryptjs');


const controllerDoctors = {
  getAll: async (req, res, next) => {
    try {
      const doctors = await Doctor.find();
      if (!doctors) {
        throwError(1201);
      }
      return res.status(200).send({ data: doctors });
    } catch (error) {
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  createDoctor: async (req, res, next) => {
    const {
      name, specialities, license, address, country, city, image, email, password, phoneNumber, hour, checkUpPrice,
    } = req.body;
    try {
    const hashedPassword = bcrypt.hashSync(password, 10)

      const newDoctor = new Doctor({
        name,
        specialities,
        license,
        country,
        city,
        image,
        address,
        email,
        password:hashedPassword,
        phoneNumber,
        schedule:{
          hour
        },
        checkUpPrice,
        active: true,
      });
      await newDoctor.save();
      mailer.sendMailRegister(newDoctor, "Doctor"); //Enviamos el mail de Confirmación de Registro
      return res.status(201).send({ newDoctor });
    } catch (error) {
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  getDoctor: async (req, res, next) => {
    const { idDoctor } = req.params;
    try {
      const doctorById = await Doctor.findById(idDoctor);
      if (!doctorById) {
        throwError(1202);
      }
      return res.status(200).send({ data: doctorById });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  updateDoctor: async (req, res, next) => {
    const { idDoctor } = req.params;
    const requestChanges = req.body; 
    try {
      const doctorForUpdate = await Doctor.findById(idDoctor);
      if (!doctorForUpdate) {
        throwError(1202);
      }
      Object.assign(doctorForUpdate, requestChanges);
      await doctorForUpdate.save();
      res.status(200).send({ data: doctorForUpdate });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  changeStatus: async (req, res, next) => {
    const { idDoctor } = req.params;
    try {
      const doctor = await Doctor.findById(idDoctor);
      if (!doctor) {
        throwError(1202);
      }
      doctor.active = !doctor.active;
      await doctor.save();
      res.status(200).send({ data: doctor });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  deleteDoctor: async (req, res, next) => {
    const { idDoctor } = req.params;
    try {
      const doctorForDelete = await Doctor.findById(idDoctor);
      if (!doctorForDelete) {
        throwError(1202);
      }
      await doctorForDelete.remove();
      return res.status(200).send({ deleted: doctorForDelete });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  countDoctorsBetweenDates: async (req, res, next) => {
    const { startDate, finishDate } = req.query;
    try {
      const countDoctors = await Doctor.aggregate([
        {
          $addFields: {
            "tempDate": {
              $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } ,
            },
          },
        },
        {
          $match: {
            "tempDate": {
              $gte: startDate,
              $lte: finishDate,
            },
          },
        },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            count: { $sum: 1 },
          },
        },
        { $sort : { _id : 1 } }
      ]);
      return res.status(200).send(countDoctors);
    } catch (error) {
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  getTopDoctors: async (req, res, next) => {
    try {
      const topDoctors = await Doctor.find({}).sort({ rating: -1 }).limit(8);
      return res.status(200).send(topDoctors);
    } catch (error) {
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
};

const throwError = (errorType) => {
  if (errorType === 1201) {
    const error = new Error("No se encontro ningun doctor");
    error.code = 404;
    throw error;
  }
  if (errorType === 1202) {
    const error = new Error("El Doctor no existe");
    error.code = 404;
    throw error;
  }
};

module.exports = controllerDoctors;
