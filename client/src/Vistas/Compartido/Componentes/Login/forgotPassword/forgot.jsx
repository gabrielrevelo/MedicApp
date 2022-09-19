import axios from "axios";
import { useState } from "react";
import NavBar from "../../Header/NavBar";
import Modal from "../../SwalStyled";

export default function ForgotPassword() {
    const [input, setInput] = useState("");
    const [inputError, setInputError] = useState("");
    
  function handleChange(e) {
    setInput(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        const res = await axios.post("/auth/forgotPassword", {email: input})
        Modal.fire(res.data)
        console.log(res)
    } catch (error) {
        Modal.fire(error.response.data)
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
          <h1 className="text-center text-3xl mb-5">Reestablecer contraseña</h1>
          <label>Ingrese su correo:</label>
          <input
            type="text"
            name="email"
            value={input}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            required=""
          />
          <button
            type="submit"
            // disabled={Object.keys(errors).length === 0 ? false : true}
            className="text-white w-full p-4 font-poppins text-sm rounded-lg mt-5 bg-[#292F53] hover:bg-[#1479FF] focus:outline-none "
          >
            Recuperar mi contraseña
          </button>
        </form>
      </div>
    </>
  );
}
