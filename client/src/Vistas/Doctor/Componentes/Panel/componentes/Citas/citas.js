import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileDoc } from "../../../../../../Redux/actions/doctorActions";
import icon from "../../Assets/ico-dark.png"

const Citas = () => {
  let doctor = useSelector((state) => state.doctores.profile.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileDoc());
  }, [dispatch]);

  console.log(doctor);

  return (
    <div>
      <section>
      <p className="flex gap-2 text-[#292F53] text-xl font-poppins mb-5">
        <img src={icon} alt="icon" className="w-7"/>
          Mis citas:
        </p>
        <div className="flex justify-between mb-[10px] px-5 py-[10px] rounded-[10px] gap-2 ">
          <span className="w-1/3 text-[#292F53] border-r border-[#292f5333]">
            Nombre
          </span>
          <span className="w-1/3 text-[#292F53] border-r border-[#292f5333]">
            Hora
            </span>
          <span className="w-1/3 text-[#292F53]">
            Paciente
          </span>
        </div>
        {doctor?.appointments.map((cita) => {
          return (
            <div className="bg-white flex justify-between mb-[10px] px-5 py-[10px] rounded-[10px] gap-2">
              <span className="w-1/3 text-[#292F53] font-raleway border-r border-[#292f5333]">
                {cita.date.split("T")[0]}
              </span>
              <span className="w-1/3 text-[#292F53] font-raleway border-r border-[#292f5333]">
                {cita.hour}
              </span>{" "}
              <span className="w-1/3 text-[#292F53] font-raleway">
                {cita.patient.name}
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Citas;
