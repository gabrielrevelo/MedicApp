const express = require('express');
const appointmentRouter = express.Router();
const controllerAppointments = require("../controllers/controller.appointment");
const { paramIdAppointmentValidator, bodyAppointmentValidatorPOST, bodyAppointmentValidatorPATCH, bodyAppointmentValidatorRATING } = require("../middlewares/validatorAppointment.js");

/* APPOINTMENTS */
/* Get All Appointments */
appointmentRouter.get("/", controllerAppointments.getAll);
/* Post Appointment */
appointmentRouter.post("/", bodyAppointmentValidatorPOST , controllerAppointments.createAppointment);
/* Get Appointment by Id */
appointmentRouter.get("/:idAppointment", paramIdAppointmentValidator, controllerAppointments.getAppointment);
/* Update Appointment by Id */
appointmentRouter.patch("/:idAppointment", paramIdAppointmentValidator, bodyAppointmentValidatorPATCH, controllerAppointments.updateAppointment);
/* Change Status(Active) Appointment*/
appointmentRouter.patch("/status/:idAppointment", paramIdAppointmentValidator, controllerAppointments.changeStatus);
/* Add Rating - Appointment*/
appointmentRouter.patch("/addRating/:idAppointment", paramIdAppointmentValidator, bodyAppointmentValidatorRATING, controllerAppointments.addRating);
/* Add Rating - Appointment sin params*/
appointmentRouter.patch("/addreview/:id", controllerAppointments.addReview);
/* Delete Appointment */
appointmentRouter.delete("/:idAppointment", paramIdAppointmentValidator, controllerAppointments.deleteAppointment);

module.exports = appointmentRouter;