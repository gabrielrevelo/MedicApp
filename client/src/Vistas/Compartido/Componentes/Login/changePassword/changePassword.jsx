import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../Header/NavBar";
import Modal from "../../SwalStyled";

export default function ChangePassword() {
    const navigate = useNavigate();
  const { token } = useParams();
  const [input, setInput] = useState({
    password: "",
    rpassword: ""
  });
  const [inputErrors, setInputErrors] = useState("");

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
  }

  function validate(input) {
    let errors = {};
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
      const res = await axios.post("/auth/changePassword", {password: input.password, token: token})
      Modal.fire(res.data)
      navigate("/");
    } catch (error) {
      Modal.fire(error.response.data);
    }
  }

  return (
    <>
      <NavBar />
      <div className="flex justify-center lg:py-10">
        <form
          className="w-full font-poppins text-sm bg-white flex flex-col rounded-lg p-10 lg:w-1/2 text-[#292F53] shadow-md"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="text-center text-3xl mb-5">Cambiar contraseña</h1>
          <label>Nueva Contraseña:</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            required={true}
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
            required={true}
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.rpassword}
          </div>
          <button
            type="submit"
            // disabled={Object.keys(errors).length === 0 ? false : true}
            className="text-white w-full p-4 font-poppins text-sm rounded-lg mt-5 bg-[#292F53] hover:bg-[#1479FF] focus:outline-none "
          >
            Cambiar mi contraseña
          </button>
        </form>
      </div>
    </>
  );
}
