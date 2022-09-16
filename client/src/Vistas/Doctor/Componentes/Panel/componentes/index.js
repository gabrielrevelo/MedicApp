import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProfileDoc } from "../../../../../Redux/actions/doctorActions";
import Agenda from "./Agenda";
import Citas from "./citas";
import Perfil from "./EditProfile/EditarPerfil";
import Resenas from "./Resenas";
import InfoData from "./InfoData";
import { BsPeopleFill, BsChatRightQuoteFill, BsFillCalendar2CheckFill, BsCurrencyExchange } from "react-icons/bs";
import TopBar from "./TopBar/TopBar.jsx";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Principal";

export default function PanelDoctor() {
  const dispatch = useDispatch();
  let doctor = useSelector((state) => state.doctores.profile.data);
  const [section, setSection] = useState("principal");

  const citaTotal = doctor?.appointments.length;
  const valorCita = doctor?.doctor.checkUpPrice * citaTotal;

  useEffect(() => {
    dispatch(getProfileDoc());
  }, [dispatch, section]);

  return (
    <>
      <div className="flex justify-evenly">
        <NavBar setSection={setSection} />
        <div className="w-[calc(100%-200px)] flex flex-col px-10 py-5 gap-5">
          <TopBar imgProfile={doctor?.doctor.image} />
          {section === "principal" ? (
            <div
              className="rounded -mr-4 h-fit mb-5 flex flex-row justify-around"
              id="InfoCards"
            >
              <InfoData
                className={
                  "w-48  bg-indigo-300  h-24 rounded m-3 flex flex-col justify-around"
                }
                text="Pacientes totales"
                icon={<BsPeopleFill />}
                dato="4"
              />
              <InfoData
                className={
                  "w-48 bg-green-300 h-24 rounded m-3 flex flex-col justify-around"
                }
                text="Citas totales"
                icon={<BsFillCalendar2CheckFill />}
                dato={citaTotal}
              />
              <InfoData
                className={
                  "w-48 bg-blue-200 h-24 rounded m-3 flex flex-col justify-around"
                }
                text="Dinero Total"
                icon={<BsCurrencyExchange />}
                dato={Math.round(valorCita)}
              />
              <InfoData
                className={
                  "w-48 bg-orange-300 h-24 rounded m-3 flex flex-col justify-around"
                }
                text="Resenas"
                icon={<BsChatRightQuoteFill />}
                dato="0"
              />
            </div>
          ) : null}

          <div className="border p-5 shadow-md rounded-2xl">
            {section === "principal" ? <Main doctor={doctor?.doctor} /> : null}
            {section === "editarPerfil" ? <Perfil info={doctor} /> : null}
            {section === "citas" ? <Citas /> : null}
            {section === "agenda" ? <Agenda /> : null}
            {section === "reseñas" ? <Resenas /> : null}
          </div>
        </div>
      </div>
    </>
  );
}
