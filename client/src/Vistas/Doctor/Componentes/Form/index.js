import { useState, React } from "react";
import { useDispatch } from "react-redux";
import { postDoctor } from "../../../../Redux/actions/doctorActions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../../../Compartido/Componentes/Header/NavBar";
import InputImage from "../../../Compartido/Componentes/InputImage/InputImage";
import Swal from 'sweetalert2'

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

  const [inputErrors, setInputErrors] = useState({
    name: "",
  });

  function validar(input) {
    let errors = {};
    if (!input.name) errors.name = "Ingrese un Nombre";
    if (!input.country) errors.country = "Ingrese un Pais";
    if (!input.city) errors.city = "Ingrese una Ciudad";
    if (!input.address) errors.address = "Ingrese una Ciudad";
    if (!input.license) errors.license = "Ingrese una Licencia";
    if (!input.phoneNumber) errors.phoneNumber = "Ingrese un Telefono";
    if (Number(input.hour[0].substr(0, 2)) > Number(input.hour[1].substr(0, 2)))
      errors.hour = "Horario invalido";
    if (!input.checkUpPrice) errors.checkUpPrice = "Ingrese una Tarifa";
    if (!input.password) errors.password = "Debe ingresar una contraseña";
    if (!input.password) errors.password = "Ingrese una contraseña.";
    if (!input.specialities)
      errors.specialities = "Se debe ingresar al menos 1 especialidad";
    if (!input.email) errors.email = "Ingrese un Email";
    if (input.specialities.length > 2)
      errors.specialities = "El maximo de especialidades es 3";
    if (!/^[0-9]+$/.test(input.license))
      errors.license = "La licencia debe ser numerica";
    if (!/^[0-9]+$/.test(input.phoneNumber))
      errors.phoneNumber = "Ingrese un telefono valido";
    if (/^[^a-zA-Z]/.test(input.name))
      errors.name = "Los caracteres especiales no estan permitidos";
    if (
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(input.email) ===
      false
    )
      errors.email = "Formato incorrecto";
    if (input.rpassword !== input.password)
      errors.rpassword = "Las contraseñas no coinciden";
    return errors;
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setInputErrors(
      validar({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  console.log(inputErrors);

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
    } catch (error) {
      console.log(error)
      Swal.fire(error.response.data.error)
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
    console.log(input.hour[0].substring(0, 2));
    console.log(input.hour[1].substring(0, 2));
    setInput({ ...input, hour });

    setInputErrors(
      validar({
        ...input,
        hour
      })
    );
  }

  function handleImage(imgUrl) {
    setInput({ ...input, image: imgUrl });
  }

  return (
    <>
      <NavBar />
      <div className="flex justify-center lg:py-10">
        <form
          className="w-full font-poppins text-sm bg-white flex flex-col rounded-lg p-10 lg:w-1/2 text-[#292F53]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            required=""
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.name}
          </div>
          <div className="flex flex-col sm:gap-5 sm:flex-row">
            <div className="sm:w-1/2">
              <label>Pais:</label>
              <input
                type="text"
                name="country"
                value={input.country}
                onChange={(e) => handleChange(e)}
                className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
                required=""
              />
              <div className="h-3 text-xs font-poppins text-red-600 text-end">
                {inputErrors.country}
              </div>
            </div>
            <div className="sm:w-1/2">
              <label>Ciudad:</label>
              <input
                type="text"
                name="city"
                value={input.city}
                onChange={(e) => handleChange(e)}
                className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
                required=""
              />
              <div className="h-3 text-xs font-poppins text-red-600 text-end">
                {inputErrors.city}
              </div>
            </div>
          </div>
          <label>Direccion:</label>
          <input
            type="text"
            name="address"
            value={input.address}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            required=""
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.address}
          </div>
          <label>Licencia:</label>
          <input
            type="text"
            name="license"
            value={input.license}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            required=""
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.license}
          </div>
          <label>Telefono:</label>
          <input
            type="text"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            required=""
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.phoneNumber}
          </div>
          <label>Especialidad:</label>
          <select
            name="hour"
            onChange={(e) => {
              handleSelect(e);
            }}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
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
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.specialities}
          </div>
          <div className="flex flex-col sm:gap-5 sm:flex-row">
            <div className="sm:w-1/2">
              <label>Horario:</label>
              <div className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border">
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
              <div className="h-3 text-xs font-poppins text-red-600 text-end">
                {inputErrors.hour}
              </div>
            </div>
            <div className="sm:w-1/2">
              <label>Tarifa:</label>
              <input
                type="text"
                name="checkUpPrice"
                placeholder="$"
                value={input.checkUpPrice}
                onChange={(e) => handleChange(e)}
                className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
                required=""
              />
              <div className="h-3 text-xs font-poppins text-red-600 text-end">
                {inputErrors.checkUpPrice}
              </div>
            </div>
          </div>
          <label>Imagen o foto de perfil:</label>
          <InputImage
            action={handleImage}
            imgUrl={input.image}
            className="flex flex-col-reverse gap-3 mt-3 items-center text-xs xl:flex-row p-4 shadow-md border rounded-lg my-2"
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {}
          </div>
          <label>Correo Electronico:</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            required=""
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.email}
          </div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            required=""
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.password}
          </div>
          <label>Repita su contraseña:</label>
          <input
            type="password"
            name="rpassword"
            value={input.rpassword}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            required=""
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.rpassword}
          </div>
          <button
            type="submit"
            // disabled={Object.keys(errors).length === 0 ? false : true}
            className="text-white w-full p-4 font-poppins text-sm rounded-lg mt-5 bg-[#292F53] hover:bg-[#1479FF] focus:outline-none "
          >
            Registarme
          </button>
        </form>
      </div>
    </>
  );
}
