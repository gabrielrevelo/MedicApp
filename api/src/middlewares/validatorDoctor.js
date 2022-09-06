const { body, param } = require("express-validator");
const validationFormat = require("./validatorFormat");

/* Doctor Routes Validations */
const paramIdDoctorValidator = [
  param("idDoctor", "Formato de ID incorrecto").trim().notEmpty().escape(),
  validationFormat,
];

const bodyDoctorValidatorPOST = [
  body("name")
    .trim()
    .notEmpty().withMessage("El campo nombre está vacio"),
  body("license")
    .trim()
    .notEmpty().withMessage("El campo licencia médica está vacio"),
  body("country")
    .trim()
    .notEmpty().withMessage("El campo país está vacio")
    .matches(/^[A-Z a-z]{5,30}$/).withMessage("El campo país debe contener solo letras."),
  body("city")
    .trim()
    .notEmpty().withMessage("El campo ciudad está vacio")
    .matches(/^[A-Z a-z]{5,50}$/).withMessage("El campo ciudad debe contener solo letras."),
  body("address")
    .trim()
    .notEmpty().withMessage("El campo dirección está vacio"),
  body("hour")
    .trim()
    .notEmpty().withMessage("El campo horario de atención está vacio"),
  body("space")
    .trim()
    .notEmpty().withMessage("El campo espacio entre citas está vacio")
    .isNumeric().withMessage("El campo espacio entre citas debe contener solo números."),
  body("checkUpPrice")
    .trim()
    .notEmpty().withMessage("El campo costo de cita está vacio"),
  body("rating")
    .trim()
    .notEmpty().withMessage("El campo rating está vacio")
    .isFloat({ min: 0, max: 5 }).withMessage("El campo rating debe ser un número decimal entre 0 - 5"),
  body("specialities")
    .trim()
    .notEmpty().withMessage("La lista de especialidades está vacia"),
  body("image")
    .trim()
    .notEmpty().withMessage("El campo imagen está vacio")
    .isURL().withMessage("El campo imagen debe contener una URL Válida")
    .optional({ nullable: true, checkFalsy: true }),
  body("email")
    .trim()
    .notEmpty().withMessage("El campo email está vacio")
    .isEmail().withMessage("Formato de email incorrecto"),
  body("password")
    .trim()
    .notEmpty().withMessage("El campo password está vacio")
    .isLength({ min: 8 }).withMessage("Password: Se requieren al menos 8 caracteres."),
  body("phoneNumber")
    .trim()
    .notEmpty().withMessage("El campo teléfono está vacio")
    .isMobilePhone().withMessage("Formato teléfono incorrecto"),
  validationFormat
];

const bodyDoctorValidatorPATCH = [
  body("name")
    .trim()
    .notEmpty().withMessage("El campo nombre está vacio"),
  body("license")
    .trim()
    .notEmpty().withMessage("El campo licencia médica está vacio")
    .optional({ nullable: true, checkFalsy: true }),
  body("country")
    .trim()
    .notEmpty().withMessage("El campo país está vacio")
    .matches(/^[A-Z a-z]{5,30}$/).withMessage("El campo país debe contener solo letras.")
    .optional({ nullable: true, checkFalsy: true }),
  body("city")
    .trim()
    .notEmpty().withMessage("El campo ciudad está vacio")
    .matches(/^[A-Z a-z]{5,50}$/).withMessage("El campo ciudad debe contener solo letras.")
    .optional({ nullable: true, checkFalsy: true }),
  body("address")
    .trim()
    .notEmpty().withMessage("El campo dirección está vacio")
    .optional({ nullable: true, checkFalsy: true }),
  body("hour")
    .trim()
    .notEmpty().withMessage("El campo horario de atención está vacio")
    .optional({ nullable: true, checkFalsy: true }),
  body("space")
    .trim()
    .notEmpty().withMessage("El campo espacio entre citas está vacio")
    .isNumeric().withMessage("El campo espacio entre citas debe contener solo números.")
    .optional({ nullable: true, checkFalsy: true }),
  body("checkUpPrice")
    .trim()
    .notEmpty().withMessage("El campo costo de cita está vacio")
    .optional({ nullable: true, checkFalsy: true }),
  body("rating")
    .trim()
    .notEmpty().withMessage("El campo rating está vacio")
    .isFloat({ min: 0, max: 5 }).withMessage("El campo rating debe ser un número decimal entre 0 - 5")
    .optional({ nullable: true, checkFalsy: true }),
  body("specialities")
    .trim()
    .notEmpty().withMessage("La lista de especialidades está vacia")
    .optional({ nullable: true, checkFalsy: true }),
  body("image")
    .trim()
    .notEmpty().withMessage("El campo image está vacio")
    .isURL().withMessage("El campo image debe ser una URL")
    .optional({ nullable: true, checkFalsy: true }),
  body("email")
    .trim()
    .notEmpty().withMessage("El campo email está vacio")
    .isEmail().withMessage("Formato de email incorrecto")
    .optional({ nullable: true, checkFalsy: true }),
  body("password")
    .trim()
    .notEmpty().withMessage("El campo password está vacio")
    .isLength({ min: 8 }).withMessage("Password: Se requieren al menos 8 caracteres.")
    .optional({ nullable: true, checkFalsy: true }),
  body("phoneNumber")
    .trim()
    .notEmpty().withMessage("El campo teléfono está vacio")
    .isMobilePhone().withMessage("Formato teléfono incorrecto")
    .optional({ nullable: true, checkFalsy: true }),
  validationFormat
];

module.exports = {
  paramIdDoctorValidator,
  bodyDoctorValidatorPOST,
  bodyDoctorValidatorPATCH,
};
