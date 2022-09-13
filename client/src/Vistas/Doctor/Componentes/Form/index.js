import { useState, React } from "react";
import { useDispatch } from "react-redux";
import { postDoctor } from "../../../../Redux/actions/doctorActions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../../../Compartido/Componentes/Header/NavBar";
import InputImage from "../../../Compartido/Componentes/InputImage/InputImage";

export default function Registro() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    country: "",
    city: "",
    specialities: [],
    license: "",
    address: "",
    email: "",
    password: "",
    rpassword: "",
    phoneNumber: "",
    hour: ["07:00", "08:00"],
    checkUpPrice: "",
    image: "https://180dc.org/wp-content/uploads/2016/08/default-profile.png",
  });

  const especialidades = [
    "Oncológica",
    "Alergología",
    "MedicinaFísica",
    "Ecografía",
    "Cardiología",
    "Ginecología",
    "Endocrinología",
    "Geriatría",
    "MedicinaGeneral",
    "Hematología",
    "Dermatología",
    "Mastología",
    "Gastroenterología",
  ];

  const [errors, setErrors] = useState({
    name: "",
  });

  function validar(input) {
    let errors = {};
    if (!input.name) errors.name = "Se requiere un nombre";
    if (!input.lastName) errors.lastName = "Se requiere un apellido";
    if (!input.password) errors.password = "Debe ingresar una contraseña";
    if (!input.specialities)
      errors.specialities = "Se debe ingresar al menos 1 especialidad";
    if (!input.email) errors.email = "El email es obligatorio";
    if (input.specialities.length > 2)
      errors.specialities = "El maximo de especialidades es 3";
    if (!/^[0-9]+$/.test(input.license))
      errors.license = "La licencia debe ser numerica";
    if (!/^[0-9]+$/.test(input.phoneNumber))
      errors.phoneNumber = "El numero de telefono SOLO puede contener numeros";
    if (/^[^a-zA-Z]/.test(input.name))
      errors.name = "Los caracteres especiales no estan permitidos";
    if (
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(input.email) ===
      false
    )
      errors.email = "Email debe ser de la forma: doctor_app@gmail.com";
    if (input.rpassword !== input.password)
      errors.rpassword = "Las contraseñas no coinciden";

    return errors;
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validar({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/doctors", {
        name: input.name,
        country: input.country,
        city: input.city,
        specialities: input.specialities,
        license: input.license,
        address: input.address,
        email: input.email,
        password: input.password,
        phoneNumber: input.phoneNumber,
        hour: input.hour.join(" - "),
        checkUpPrice: input.checkUpPrice,
        image: input.image,
      });
      if (res.status === 201) {
        alert("Usted se a registrado");
        navigate("/");
      }
    } catch (e) {
      console.log(e.toJSON());
    }
  }

  function handleSelect(e) {
    setInput({
      ...input,
      specialities: [e.target.value],
    });
  }

  function handleHour(e) {
    let hour = [...input.hour];
    if (e.target.id === "first") hour[0] = e.target.value;
    if (e.target.id === "second") hour[1] = e.target.value;
    setInput({ ...input, hour });
  }

  function handleImage(imgUrl) {
    setInput({ ...input, image: imgUrl });
  }

  return (
    <>
      <NavBar />
      <div className="bg-[#E7EFFD] py-10 flex justify-center">
        <form
          className="bg-white w-1/2 flex flex-col rounded p-10 mx-10"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
            />
            {errors.name ? <p>{errors.name}</p> : null}
          </div>
          <div className="mb-6 flex gap-5">
            <div className="w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Pais
              </label>
              <input
                type="text"
                name="country"
                value={input.country}
                onChange={(e) => handleChange(e)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required=""
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Ciudad
              </label>
              <input
                type="text"
                name="city"
                value={input.city}
                onChange={(e) => handleChange(e)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required=""
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Direccion
            </label>
            <input
              type="text"
              name="address"
              value={input.address}
              onChange={(e) => handleChange(e)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
            />
            {errors.address ? <p>{errors.address}</p> : null}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Numero de Licencia
            </label>
            <input
              type="text"
              name="license"
              value={input.license}
              onChange={(e) => handleChange(e)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
            />
            {errors.license ? <p>{errors.license}</p> : null}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Numero de Telefono
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={(e) => handleChange(e)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
            />
            {errors.phoneNumber ? <p>{errors.phoneNumber}</p> : null}
          </div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Especialidad
          </label>
          <select
            onChange={(e) => {
              handleSelect(e);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={""} selected>
              Seleccione una Opcion
            </option>
            {especialidades.map((t) => (
              <option value={t} key={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.specialities ? <p>{errors.specialities}</p> : null}
          <br />

          <div className="mb-6 flex gap-5">
            <div className="w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Horario
              </label>
              <div className="flex justify-evenly">
                <select id="first" onChange={(e) => handleHour(e)}>
                  <option value="07:00" selected>
                    7 AM
                  </option>
                  <option value="08:00">8 AM</option>
                  <option value="09:00">9 AM</option>
                  <option value="10:00">10 AM</option>
                  <option value="11:00">11 AM</option>
                  <option value="12:00">12 AM</option>
                  <option value="13:00">1 PM</option>
                  <option value="14:00">2 PM</option>
                  <option value="15:00">3 PM</option>
                  <option value="16:00">4 PM</option>
                  <option value="17:00">5 PM</option>
                  <option value="18:00">6 PM</option>
                  <option value="19:00">7 PM</option>
                </select>
                -
                <select id="second" onChange={(e) => handleHour(e)}>
                  <option value="08:00" selected>
                    8 AM
                  </option>
                  <option value="09:00">9 AM</option>
                  <option value="10:00">10 AM</option>
                  <option value="11:00">11 AM</option>
                  <option value="12:00">12 AM</option>
                  <option value="13:00">1 PM</option>
                  <option value="14:00">2 PM</option>
                  <option value="15:00">3 PM</option>
                  <option value="16:00">4 PM</option>
                  <option value="17:00">5 PM</option>
                  <option value="18:00">6 PM</option>
                  <option value="19:00">7 PM</option>
                </select>
              </div>
            </div>
            <div className="w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Valor de la Cita
              </label>
              <input
                type="text"
                name="checkUpPrice"
                placeholder="$"
                value={input.checkUpPrice}
                onChange={(e) => handleChange(e)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required=""
              />
            </div>
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
              Correo Electronico
            </label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={(e) => handleChange(e)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
            />
            {errors.email ? <p>{errors.email}</p> : null}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) => handleChange(e)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
            />
            {errors.password ? <p>{errors.password}</p> : null}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Repita su contraseña
            </label>
            <input
              type="password"
              name="rpassword"
              value={input.rpassword}
              onChange={(e) => handleChange(e)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
            />
            {errors.rpassword ? <p>{errors.rpassword}</p> : null}
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                name="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Acepto los{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terminos y condiciones
              </a>
            </label>
          </div>
          <button
            type="submit"
            // disabled={Object.keys(errors).length === 0 ? false : true}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Registar nueva cuenta
          </button>
        </form>
      </div>
    </>
  );
}
