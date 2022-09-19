const express = require('express');
const patientRouter = express.Router();
const controllerPatients = require("../controllers/controller.patient");
const ValidateToken = require('../middlewares/Authorization');
const { paramIdPatientValidator, bodyPatientValidatorPOST, bodyPatientValidatorPATCH, bodyPatientValidatorFAVORITES } = require("../middlewares/validatorPatient.js");
const validateUser = require("../middlewares/userExist")

/* PATIENTS */
/* Get All Patients  */ 
// UNA RUTA SOLO PACIENTES:  patientRouter.get("/",[ValidateToken.Patient], controllerPatients.getAll);
patientRouter.get("/", controllerPatients.getAll);

/* Get Patient by Token */
patientRouter.get("/profile", [ValidateToken.Patient], controllerPatients.getPatientToken);

/* Post Patient */
patientRouter.post("/", validateUser.userExist, bodyPatientValidatorPOST , controllerPatients.createPatient);

/* Get Patient by Id */
patientRouter.get("/:idPatient", paramIdPatientValidator, controllerPatients.getPatient);
/* Update Patient by Id */
patientRouter.patch("/:idPatient", paramIdPatientValidator, bodyPatientValidatorPATCH, controllerPatients.updatePatient);
/* Change Status(Active) Patient*/
patientRouter.patch("/status/:idPatient", paramIdPatientValidator, controllerPatients.changeStatus);
/* Add Trust Doctor - Patient*/
patientRouter.patch("/saveDoctor/:idPatient", paramIdPatientValidator, bodyPatientValidatorFAVORITES, controllerPatients.addTrustDoctor);
/* Delete Patient */
patientRouter.delete("/:idPatient", paramIdPatientValidator, controllerPatients.deletePatient);

/* Get Patients between Dates - queries for Admins */
patientRouter.get("/data/queries/", controllerPatients.countPatientsBetweenDates);

module.exports = patientRouter;
