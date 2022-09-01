var express = require('express');
var doctorRouter = express.Router();
const controllerDoctors = require("../controllers/controller.doctor");

/* DOCTORS */
doctorRouter.get("/", controllerDoctors.getAll);
doctorRouter.post("/", controllerDoctors.createDoctor);
doctorRouter.get("/:idDoctor", controllerDoctors.getDoctor);

module.exports = doctorRouter;
