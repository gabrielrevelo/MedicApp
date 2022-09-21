const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");
const mailer = require("../config/sendMails/mailer");

const controllerAppointments = {
  getAll: async (req, res, next) => {
    try {
      const appointments = await Appointment.find()
        .populate({
          path: "patient",
          model: "Patient",
          select: ["name", "email"],
        })
        .populate({
          path: "doctor",
          model: "Doctor",
          select: [
            "name",
            "email",
            "specialities",
            "address",
            "city",
            "schedule",
            "checkUpPrice",
          ],
        });
      if (!appointments) {
        throwError(1401);
      }
      return res.status(200).send({ data: appointments });
    } catch (error) {
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  createAppointment: async (req, res, next) => {
    const { date, hour, paymentProcessed, doctor, patient } = req.body;
    try {
      const newAppointment = new Appointment({
        doctor,
        patient,
        date,
        hour,
        paymentProcessed,
      });
      await newAppointment.save();
      mailer.sendMailAppointment(newAppointment); //Enviamos el mail de Confirmación de Cita al Paciente y Doctor.
      return res.status(201).send({ newAppointment: newAppointment });
    } catch (error) {
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  getAppointment: async (req, res, next) => {
    const { idAppointment } = req.params;
    try {
      const appointmentById = await Appointment.findById(idAppointment)
        .populate({
          path: "patient",
          model: "Patient",
          select: ["name", "email"],
        })
        .populate({
          path: "doctor",
          model: "Doctor",
          select: [
            "name",
            "email",
            "specialities",
            "address",
            "city",
            "schedule",
            "checkUpPrice",
          ],
        });
      if (!appointmentById) {
        throwError(1402);
      }
      return res.status(200).send({ data: appointmentById });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  updateAppointment: async (req, res, next) => {
    const { idAppointment } = req.params;
    const requestChanges = req.body;
    try {
      const appointmentForUpdate = await Appointment.findById(idAppointment);
      if (!appointmentForUpdate) {
        throwError(1402);
      }
      Object.assign(appointmentForUpdate, requestChanges);
      await appointmentForUpdate.save();
      res.status(200).send({ data: appointmentForUpdate });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  changeStatus: async (req, res, next) => {
    const { idAppointment } = req.params;
    try {
      const appointment = await Appointment.findById(idAppointment);
      if (!appointment) {
        throwError(1402);
      }
      appointment.active = !appointment.active;
      await appointment.save();
      res.status(200).send({ data: appointment });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  addRating: async (req, res, next) => {
    const { idAppointment } = req.params;
    const { score, comment } = req.body;
    try {
      const appointment = await Appointment.findById(idAppointment);
      if (!appointment) {
        throwError(1402);
      }
      appointment.score = score;
      appointment.comment = comment;
      await appointment.save();
      res.status(200).send({ data: appointment });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  addReview: async (req, res, next) => {
    // console.log(req.params.id);
    try {
      const appointmentR = await Appointment.updateOne(
        {
          _id: req.params.id,
        },
        { $set: { score: req.body.score, comment: req.body.comment } }
      );
      const findAppointment = await Appointment.findOne({ _id: req.params.id });
      const doctorAppointments = await Appointment.find({
        doctor: findAppointment.doctor,
      });
      const mapReviews = doctorAppointments.map((review) => review.score);
      const totalReviews = mapReviews.reduce((acc, score) => acc + score, 0);
      await Doctor.updateOne({ _id: findAppointment.doctor },
        { $set: { rating: (totalReviews / mapReviews.length).toFixed(1) } }
      );
      res.status(200).send({ data: appointmentR });
    } catch (error) {
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },

  deleteAppointment: async (req, res, next) => {
    const { idAppointment } = req.params;
    try {
      const appointmentForDelete = await Appointment.findById(idAppointment);
      if (!appointmentForDelete) {
        throwError(1402);
      }
      await appointmentForDelete.remove();
      return res.status(200).send({ deleted: appointmentForDelete });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
};

const throwError = (errorType) => {
  if (errorType === 1401) {
    const error = new Error("No encontramos citas");
    error.code = 404;
    throw error;
  }
  if (errorType === 1402) {
    const error = new Error("La cita no existe");
    error.code = 404;
    throw error;
  }
};

module.exports = controllerAppointments;
