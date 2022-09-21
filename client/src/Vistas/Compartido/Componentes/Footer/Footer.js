import react from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="font-raleway flex flex-col text-[#292F53] text-center m-5 py-3 border-t border-[#292f5333]">
      <div>
        <Link className="text-[#1479FF] hover:underline" to="/about">
          Sobre Nosotros
        </Link>
        <p className="">
          www.MedicApp.com © 2022 - Encontrá tu especialista y pedí tu turno
        </p>
      </div>
    </footer>
  );
}
