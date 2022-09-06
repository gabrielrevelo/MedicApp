const { body, param } = require("express-validator");
const validationFormat = require("./validatorFormat");

/* Patient Routes Validations */
const paramIdPatientValidator = [
  param("idPatient", "Formato de ID incorrecto")
    .trim()
    .notEmpty()
    .escape(),
    validationFormat
];

const bodyPatientValidatorPOST = [
  body("name")
    .trim()
    .notEmpty().withMessage("El campo nombre está vacio"),
  body("email")
    .trim()
    .notEmpty().withMessage("El campo email está vacio")
    .isEmail().withMessage("Formato de email incorrecto"),
  body("password")
    .trim()
    .notEmpty().withMessage("El campo password está vacio")
    .isLength({min: 8}).withMessage("Password: Se requieren al menos 8 caracteres."),
  body("phoneNumber")
    .trim()
    .notEmpty().withMessage("El campo teléfono está vacio")
    .isMobilePhone().withMessage("Formato teléfono incorrecto"),
  body("image")
    .trim()
    .notEmpty().withMessage("El campo imagen está vacio")
    .isURL().withMessage("El campo imagen debe contener una URL Válida")
    .optional({ nullable: true, checkFalsy: true }),
  validationFormat
];

const bodyPatientValidatorPATCH = [
  body("name")
    .trim()
    .notEmpty().withMessage("El campo nombre está vacio")
    .optional({nullable: true, checkFalsy: true}),
  body("email")
    .trim()
    .notEmpty().withMessage("El campo email está vacio")
    .isEmail().withMessage("Formato de email incorrecto")
    .optional({nullable: true, checkFalsy: true}),
  body("password")
    .trim()
    .notEmpty().withMessage("El campo password está vacio")
    .isLength({min: 8}).withMessage("Password: Se requieren al menos 8 caracteres.")
    .optional({nullable: true, checkFalsy: true}),
  body("phoneNumber")
    .trim()
    .notEmpty().withMessage("El campo teléfono está vacio")
    .isMobilePhone().withMessage("Formato teléfono incorrecto")
    .optional({nullable: true, checkFalsy: true}),
  body("image")
    .trim()
    .notEmpty().withMessage("El campo imagen está vacio")
    .isURL().withMessage("El campo imagen debe contener una URL Válida")
    .optional({ nullable: true, checkFalsy: true }),
  validationFormat
];

const bodyPatientValidatorFAVORITES = [
  body("idDoctor", "Formato de ID Doctor incorrecto")
    .trim()
    .isMongoId()
    .escape(),
  validationFormat
];

module.exports = {
  paramIdPatientValidator,
  bodyPatientValidatorPOST,
  bodyPatientValidatorPATCH,
  bodyPatientValidatorFAVORITES
}