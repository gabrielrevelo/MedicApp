import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileDoc } from "../../../../../Redux/actions/doctorActions";

const Citas = () => {
  let doctor = useSelector((state) => state.doctores.profile.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileDoc());
  }, [dispatch]);

  return (
    <div>
      <section>
        <p className="text-[#292F53] text-xl font-poppins mb-5">
          Mis <span className="text-[#1479FF]">citas</span> de la semana:
        </p>
        {doctor?.appointments.map((cita) => {
          return (
            <div className="bg-white flex mb-[10px] px-5 py-[10px] rounded-[10px]">
              <p>
                Fecha:{" "}
                <span className=" text-[#292F53] font-raleway">
                  {cita.date.split("T")[0]}
                </span>
              </p>
              <p>
                Hora:{" "}
                <span className=" text-[#292F53] font-raleway">
                  {cita.hour}
                </span>{" "}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Citas;
