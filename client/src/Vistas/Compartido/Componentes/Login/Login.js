import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgLogin from "../../imagenes compartidas/login.jpeg";
import NavBar from "../Header/NavBar";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuthContext } from "../../../../context/authContext";
import Google from "./Google/Login";

const Validate = (input) => {
  let errors = {};
  if (!input.email) errors.email = "el email es obligatorio";
  if (
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(input.email) ===
    false
  )
    errors.email = "email debe ser de la forma: example@gmail.com";
  if (!input.password) errors.password = "debe ingresar una contraseña";
  return errors;
};

export default function Login(email, password) {
  const { login } = useAuthContext();

  // const navigate = useNavigate()
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "email is required",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value.replace(/ /g, ""), //quitar espacios
    });
    let errorsResult = Validate({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(errorsResult);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: "/auth/signin",
        method: "POST",
        data: input,
      });

      localStorage.setItem("auth-token", JSON.stringify(response.data.token));
      localStorage.setItem("User", JSON.stringify(response.data.data));
      window.sessionStorage.setItem(
        "Rol",
        JSON.stringify(response.data.data.rol)
      );
      window.sessionStorage.setItem("isAuth", true);

      setInput({
        email: "",
        password: "",
      });
      login();
      // if (response.data.data.rol === 'ADMIN') {
      //     navigate('/')
      // } else if (response.data.data.rol === 'DOCTOR') {
      //     navigate('/doctor/dashboard')
      // } else if (response.data.data.rol === 'PATIENT') {
      //     navigate('/')
      // }
    } catch (error) {
      Swal.fire(error.response.data.error);
      // console.log(error);
    }
  };

  return (
    <div>
      <NavBar avaliable="not" />
      <div>
        <section className="min-h-screen flex items-stretch text-white ">
          <div
            className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
            style={{ backgroundColor: "#292F53" }}
          >
            <div className="w-full py-6 z-20">
              {/* Logo: */}
              {/* <h1 className="my-6">
          <svg viewBox="0 0 247 31" className="w-auto h-7 sm:h-8 inline-flex"><path fill="rgba(99,102,241, .8)" fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" /><path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" /></svg>
        </h1> */}
              <div className="py-6 space-x-2"></div>

              <form
                onSubmit={(e) => handleSubmit(e)}
                className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
              >
                <div className="pb-2 pt-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={input.email}
                    onChange={(e) => handleChange(e)}
                    className="block w-full p-4 text-lg text-zinc-500 rounded-sm bg-white"
                  />
                  {errors && errors.email ? (
                    <span className="text-red-600"> {errors.email} </span>
                  ) : null}
                </div>
                <div className="pb-2 pt-4">
                  <input
                    className="block w-full p-4 text-lg text-zinc-500 rounded-sm bg-white"
                    value={input.password}
                    onChange={(e) => handleChange(e)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  {errors && errors.password ? (
                    <span className="text-red-600"> {errors.password} </span>
                  ) : null}
                </div>
                <div className="text-right text-slate-400 hover:underline hover:text-gray-100">
                  <Link to="/">Forgot your password?</Link>
                </div>
                <div className="px-4 pb-2 pt-4">
                  <button className="uppercase block w-full p-4 text-lg rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none ">
                    Entrar
                  </button>
                </div>
                <Google login={login}/>
                <div className="px-4 pb-2 pt-4">
                  <Link to="/registerPatient">
                    {/* <Link to='/admin'> */}
                    <button className="uppercase block w-full p-4 text-lg rounded-full bg-lime-500 hover:bg-lime-600 focus:outline-none">
                      Registrate como Paciente
                    </button>
                  </Link>
                </div>
                <div className="px-4 pb-2 pt-4">
                  <Link to="/registerDoctor">
                    {/* <Link to='/doctor'> */}
                    <button className="uppercase block w-full p-4 text-lg rounded-full bg-lime-500 hover:bg-lime-600 focus:outline-none">
                      Registrate como Doctor
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <div
            className="lg:flex w-1/2 hidden bg-blue-500 bg-no-repeat bg-cover relative items-center z-10"
            style={{ backgroundImage: `url(${imgLogin})` }}
          >
            <div className="absolute bg-blue-400 opacity-10 inset-0  -z-1" />
            <div className="w-full px-20   opacity-60 ">
              <h1 className="text-6xl font-bold text-left text-zinc-500 tracking-wide">
                MediApp
              </h1>
              <p className="text-3xl my-3 text-zinc-500 -mx-6 m-2 -top-8 ">
                Cuidamos tu Salud y La De Tu Familia
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
