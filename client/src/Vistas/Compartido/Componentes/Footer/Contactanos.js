import { Link } from "react-router-dom";
import icon from "./iconimg/ico-dark.png"

export default function Contactanos() {
  return (
    <div>
      <div class="p-2">
        <div class="h-[100px] bg-indigo-100 p-4">
        <Link
          className=""
          to="/"
        >
          <img class="h-[60px] ml-[50px]" src={icon}/>
        </Link>
        </div>
        <div class="flex flex-col justify-center align-middle text-center">
          <br />
          <label class="text-[30px] font-poppins">Contactanos?</label>
          <br />
          <label class="text-[#292F53] text-xl font-poppins mb-5 border-2 border-gray-300 w-[1000px] text-center align-middle place-self-center" > Tienes algun problema con tu cuenta o necesitas aclarar dudas? </label>
          <div class="flex-col text-justify p-6 text-[30px] font-poppins text-center align-middle border-gray-500 rounded border-[1px] bg-blue-500 text-white justify-center w-[90%] self-center">

            Puedes contactarnos a:
            <div class="h-[500px] bg-indigo-400 p-4">
                email: <div class="text-blue-200">MedicAppAssisstance@hotmail.com</div>
                telefonos: <div class="text-blue-200">en Colombia - +57 5698741</div>
                <div class="text-blue-200">en Argentina - +54 11254879</div>
                <div class="text-blue-200">en Perú - +51 2938754</div>
                sedeInternacional: <div class="text-blue-200">en Colombia - Av. Carabobo #125, Medellín, Antioquia, Colombia</div>
            </div>


        
            <div className="text-[#292F53] text-xl font-poppins mb-5 ">

            
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}