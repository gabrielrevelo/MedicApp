import react from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center  bg-[#292F53] pt-2 pb-2 border-[1px] border-gray-200">
      <div>
        <aside class="   mt-[20px] w-[100%] rounded p-2">
          <div className="flex flex-row m-[25px] justify-center  ">
            <Link
              className="text-blue-500 hover:text-blue-400 font-poppins mr-[35px] ml-[35px] text-[25px]"
              to="/servicios"
            >
              Servicios
            </Link>

            <Link
              className="text-blue-500 hover:text-blue-400 font-poppins mr-[35px] ml-[35px] text-[25px]"
              to="/somos"
            >
              A que nos dedicamos
            </Link>

            <Link
              className="text-blue-500 hover:text-blue-400 font-poppins mr-[35px] ml-[35px] text-[25px]"
              to="/contacto"
            >
              Contactanos
            </Link>

            <Link
              className="text-blue-500 hover:text-blue-400 font-poppins mr-[35px] ml-[35px] text-[25px]"
              to="/about"
            >
              Acerca de nosotros
            </Link>
          </div>
        </aside>
      </div>

      <hr className="my-3" />
      <div>
        <p className=" text-white">
          www.MedicApp.com © 2022 - Encontrá tu especialista y pedí turno
        </p>
      </div>
    </footer>
  );
}
