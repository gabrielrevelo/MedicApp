import { Link } from "react-router-dom";
import icon from "./iconimg/ico-dark.png";
import NavBar from "../Header/NavBar";
export default function Contactanos() {
  return (
    <div>
      <div >
        <div class="h-[100px] bg-indigo-100 ">
      <NavBar />
      
        </div>
        <div class="flex flex-col justify-center align-middle text-center">
          <br />
          <label class="text-[30px] text-[#292F53] font-poppins">Contactanos?</label>
          <br />
          <label class="text-[#1479FF] text-xl font-poppins mb-5 border-2 border-gray-300 w-[1000px] text-center align-middle place-self-center">
            {" "}
            Tienes algun problema con tu cuenta o necesitas aclarar dudas?{" "}
          </label>
          <div class="flex-col text-justify p-6 text-[30px] font-poppins text-center align-middle border-gray-500 rounded border-[1px] bg-[#292F53] text-white justify-center w-[90%] self-center">
            Puedes contactarnos a:
            <div class="h-[500px] text-[#1479FF] p-4">
              email:{" "}
              <div class="text-white">MedicAppAssisstance@hotmail.com</div>
              <br/>
              telefonos:{" "}
              <div class="text-white">en Colombia - +57 5698741</div>
              <div class="text-white">en Argentina - +54 11254879</div>
              <div class="text-white">en Perú - +51 2938754</div>
              <br/>
              sedeInternacional:{" "}
              <div class="text-white">
                en Colombia - Av. Carabobo #125, Medellín, Antioquia, Colombia
              </div>
              <br/>
            </div>
            <div className="text-[#292F53] text-xl font-poppins mb-5 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
