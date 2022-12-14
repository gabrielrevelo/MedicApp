import { Link } from "react-router-dom";
import icon from "./iconimg/ico-dark.png";
import NavBar from "../Header/NavBar";

export default function QuienesSomos() {
  return (
    <div>
      <div class="">
        <div class="h-[100px] bg-indigo-100 ">
          <NavBar />
        </div>
        <div class="flex flex-col justify-center align-middle text-center">
          <br />
          <label class="text-[30px] text-[#292F53] font-poppins">Que es lo que hacemos?</label>
          <br />
          <label class="text-[#1479FF] text-xl font-poppins mb-5 border-2 border-gray-300 w-[1000px] text-center align-middle place-self-center">
            Haciendo más humana la experiencia del cuidado de la salud{" "}
          </label>
          <div class="flex-col text-justify p-6 text-[25px] font-poppins text-center align-middle border-gray-500 rounded border-[1px] bg-[#292F53] text-white justify-center w-[90%] self-center">
            Queremos que los pacientes encuentren al médico perfecto y reserven
            una cita de la manera más fácil. El viaje del paciente debe ser
            placentero, y por eso siempre estamos junto a ellos: para ayudarlos
            a encontrar la mejor atención posible. En cualquier momento, en
            cualquier lugar. También ayudamos a los médicos a administrar mejor
            su práctica y construir su reputación en línea. Con nuestra solución
            integral integrada, los médicos no solo pueden mejorar su presencia
            en línea, sino también dedicar su tiempo a lo que realmente importa:
            sus pacientes.
            <div className="text-[#292F53] text-xl font-poppins mb-5 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
