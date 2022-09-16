import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProfileDoc } from "../../../../../Redux/actions/doctorActions";
import Citas from "./Citas/citas";
import Perfil from "./EditProfile/EditarPerfil";
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
      <div className="flex justify-evenly font-poppins">
        <NavBar setSection={setSection} />
        <div className="w-full flex flex-col p-5 gap-5 sm:w-[calc(100%-200px)] sm:px-10 sm:py-5">
          <TopBar imgProfile={doctor?.doctor.image} setSection={setSection}/>
          {section === "principal" ? (
            <div
              className="gap-5 flex flex-col items-center sm:flex-row sm:justify-center"
              id="InfoCards"
            >
              <InfoData
                className={
                  "w-80 h-24 bg-indigo-300 rounded-2xl flex flex-col justify-around p-5"
                }
                text="Pacientes totales"
                icon={<BsPeopleFill />}
                dato="4"
              />
              <InfoData
                className={
                  "w-80 h-24 bg-green-300 h-24 rounded-2xl flex flex-col justify-around p-5"
                }
                text="Citas totales"
                icon={<BsFillCalendar2CheckFill />}
                dato={citaTotal}
              />
              <InfoData
                className={
                  "w-80 h-24 bg-blue-200 h-24 rounded-2xl flex flex-col justify-around p-5"
                }
                text="Dinero Total"
                icon={<BsCurrencyExchange />}
                dato={Math.round(valorCita)}
              />
              <InfoData
                className={
                  "w-80 h-24 bg-orange-300 h-24 rounded-2xl flex flex-col justify-around p-5"
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
          </div>
        </div>
      </div>
    </>
  );
}
