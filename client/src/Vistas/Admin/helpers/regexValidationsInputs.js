/** Basic Regex for Validate Inputs */
const noEmpty = /\S+/;
const validateText = /^(?=.*?[A-Za-z])[A-Za-z+\s]+$/;
const validateUrl = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateInput = (input, type) => {
  let errors = {};

  const nextValidations = () => {
    if (input.name && (!validateText.test(input.name) || input.name.length < 4)) {
      errors.name = "Solo se permiten letras.";
    }
    if (input.password && input.password.length < 8) {
      errors.password = "Solo letras y como mímino 8 caracteres";
    }
    if (input.email && !validateEmail.test(input.email)) {
      errors.email = "Formato de email incorrecto";
    }
    if (input.image && !validateUrl.test(input.image)) {
      errors.image = "Url de imagen icorrecta";
    }
    if (input.specialities && input.specialities.length > 3) {
      errors.specialities = "Máximo 3 especialidades seleccionadas";
    }
  }

  const propsToEvaluate = Object.keys(input);
  propsToEvaluate.forEach(title => {
    if(type === "create" && !noEmpty.test(input[title])){
      errors[title] = "Campo requerido";
    }
    nextValidations();
  });

  return errors;
};