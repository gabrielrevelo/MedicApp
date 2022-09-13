var express = require('express');
var doctorRouter = express.Router();
const controllerDoctors = require("../controllers/controller.doctor");
const ValidateToken = require('../middlewares/Authorization');
const { paramIdDoctorValidator, bodyDoctorValidatorPOST, bodyDoctorValidatorPATCH } = require("../middlewares/validatorDoctor");

/* DOCTORS */
/* Get All Doctors */

// UNA RUTA SOLO DOCTORES: 
doctorRouter.get("/", controllerDoctors.getAll);
// doctorRouter.get("/", controllerDoctors.getAll);
/* Post Doctor */
doctorRouter.post("/", bodyDoctorValidatorPOST, controllerDoctors.createDoctor);
/* Get Doctor by Id */
doctorRouter.get("/:idDoctor", paramIdDoctorValidator, controllerDoctors.getDoctor);
/* Update Doctor by Id */
doctorRouter.patch("/:idDoctor",paramIdDoctorValidator, bodyDoctorValidatorPATCH, controllerDoctors.updateDoctor);
/* Change Status(Active) Doctor*/
doctorRouter.patch("/status/:idDoctor",paramIdDoctorValidator, controllerDoctors.changeStatus);
/* Delete Doctor */
doctorRouter.delete("/:idDoctor",paramIdDoctorValidator, controllerDoctors.deleteDoctor);

/* Get Doctors between Dates - queries for Admins */
doctorRouter.get("/data/queries/", controllerDoctors.countDoctorsBetweenDates);
/* Get Top Doctors | View Home */
doctorRouter.get("/data/top", controllerDoctors.getTopDoctors);

module.exports = doctorRouter;
