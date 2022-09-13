import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../Compartido/Componentes/Header/NavBar";
import InputImage from "../../../Compartido/Componentes/InputImage/InputImage";

export default function CreatePatient() {
  const navigate = useNavigate();
  const [inputErrors, setInputErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    rpassword: "",
    image: "https://180dc.org/wp-content/uploads/2016/08/default-profile.png",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setInputErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(inputErrors);
  }

  function validate(input) {
    let errors = {};
    if (!input.name) errors.name = "Ingrese un nombre.";
    if (!input.phoneNumber)
      errors.phoneNumber = "Ingrese un numero de telefono.";
    if (!input.email) errors.email = "Ingrese un Email.";
    if (!input.password) errors.password = "Ingrese una contraseña.";
    if (!/^[0-9]+$/.test(input.phoneNumber))
      errors.phoneNumber = "Solo puede contener numeros.";
    if (
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(input.email) ===
      false
    )
      errors.email = "Email debe ser de la forma: doctor_app@gmail.com.";
    if (input.password.length < 8) {
      errors.password = "Se requieren al menos 8 caracteres.";
    }
    if (input.rpassword !== input.password)
      errors.rpassword = "Las contraseñas no coinciden";
    return errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      const res = await axios.post("/patients", {
        name: input.name,
        phoneNumber: input.phoneNumber,
        email: input.email,
        password: input.password,
        image: input.image,
      });
      console.log(res);
      if (res.status === 201) {
        alert("Usted se a registrado");
        navigate("/");
      }
    } catch (e) {
      console.log(e.toJSON());
    }
  }

  function handleImage(imgUrl) {
    setInput({ ...input, image: imgUrl });
  }

  return (
    <>
      <NavBar />
      <div className="py-10 flex justify-center">
        <form
          className="bg-white w-1/2 flex flex-col rounded p-10 mx-10"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Nombre:
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required={true}
            />
            {inputErrors.name ? <p>{inputErrors.name}</p> : null}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Numero de telefono:
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={(e) => handleChange(e)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required={true}
            />
            {inputErrors.phoneNumber ? <p>{inputErrors.phoneNumber}</p> : null}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Imagen o Foto de Perfil
            </label>
            <InputImage
              action={handleImage}
              imgUrl={input.image}
              className="flex gap-4 items-center"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={(e) => handleChange(e)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required={true}
            />
            {inputErrors.email ? <p>{inputErrors.email}</p> : null}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) => handleChange(e)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required={true}
            />
            {inputErrors.password ? <p>{inputErrors.password}</p> : null}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Repita su contraseña:
            </label>
            <input
              type="password"
              name="rpassword"
              value={input.rpassword}
              onChange={(e) => handleChange(e)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required={true}
            />
            {inputErrors.rpassword ? <p>{inputErrors.rpassword}</p> : null}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Registrarme como paciente
          </button>
        </form>
      </div>
    </>
  );
}
