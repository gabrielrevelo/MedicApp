const { body, param } = require("express-validator");
const validationFormat = require("./validatorFormat");

/* Appointment Routes Validations */
const paramIdAppointmentValidator = [
  param("idAppointment", "Formato de ID incorrecto")
    .trim()
    .notEmpty()
    .escape(),
  validationFormat
];
const bodyAppointmentValidatorPOST = [
  body("doctor")
    .trim()
    .notEmpty().withMessage("El campo Doctor está vacio"),
  body("patient")
    .trim()
    .notEmpty().withMessage("El campo Paciente está vacio"),
  body("date")
    .trim()
    .notEmpty().withMessage("El campo fecha de cita está vacio")
    .isISO8601('yyyy-mm-dd'),
  body("hour")
    .trim()
    .notEmpty().withMessage("El campo hora de cita está vacio")
    .matches('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$'),
  body("paymentProcessed")
    .trim()
    .notEmpty().withMessage("El campo estado de pago está vacio")
    .isBoolean().withMessage("El campo estado de pago debe ser un valor booleano"),
  validationFormat
];

const bodyAppointmentValidatorRATING = [
  body("score")
    .trim()
    .notEmpty().withMessage("El campo score está vacio")
    .isFloat({ min: 0, max: 5 }).withMessage("El campo score debe ser un número decimal entre 0 - 5"),
  body("comment")
    .trim()
    .notEmpty().withMessage("Debes escribir una opinión sobre el servicio")
    .isLength({ min: 15 }).withMessage("Comentario: Se requieren al menos 15 caracteres."),
  validationFormat
];

const bodyAppointmentValidatorPATCH = [
  body("date")
    .trim()
    .notEmpty().withMessage("El campo fecha de cita está vacio")
    .isISO8601('yyyy-mm-dd')
    .optional({nullable: true, checkFalsy: true}),
  body("hour")
    .trim()
    .notEmpty().withMessage("El campo hora de cita está vacio")
    .matches('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')
    .optional({nullable: true, checkFalsy: true}),
  body("paymentProcessed")
    .trim()
    .notEmpty().withMessage("El campo estado de pago está vacio")
    .isBoolean().withMessage("El campo estado de pago debe ser un valor booleano")
    .optional({nullable: true, checkFalsy: true}),
  validationFormat
];

module.exports = {
  paramIdAppointmentValidator,
  bodyAppointmentValidatorPOST,
  bodyAppointmentValidatorPATCH,
  bodyAppointmentValidatorRATING
}