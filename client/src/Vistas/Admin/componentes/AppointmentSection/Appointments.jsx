import React, { useEffect, useState } from "react";
import moment from "moment";
import styles from "./Appointments.module.css";
import iconTitle from "../../assets/ico-dark.png";
import iconAdd from "../../assets/dashboard/add-icon.svg";

import { useSelector, useDispatch } from "react-redux";
import iconDoctor from "../../assets/dashboard/icon-speciality.png";
import iconAddress from "../../assets/dashboard/icon-address.png";
import iconPatient from "../../assets/dashboard/icon-license.png";

import {
  getAppointments,
  getAppointment,
  getAppointmentsBySearch
} from "../../../../Redux/actions/generalActionsAppointments";
import NotFoundAppointment from "./NotFoundAppointment";

const Appointments = () => {
  const dispatch = useDispatch();
  const { appointments, appointmentsFiltered } = useSelector((state) => state.generalAppointments);
  const [query, setQuery] = useState("");
  const [form, setForm] = useState({
    edit: false,
    create: false,
    detail: false,
  });

  const searchAppointments = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    dispatch(getAppointmentsBySearch(query)); 
  };

  /**
   *  @useEffect => todos los pacientes
   * */
  useEffect(() => {
    dispatch(getAppointments());
  }, [dispatch, form]);

  return (
    <>
      <section className={styles.MainContainer}>
        <div className={styles.TitleContainer}>
          <h4 className={styles.Title}>
            <img src={iconTitle} alt="alt-img-title-icon" />
            Lista de Citas en <b>MedicApp</b>
          </h4>
          <div className={styles.ContainerSearchBar}> 
            <input
              type="text"
              placeholder="Buscar paciente/doctor"
              className={styles.InputSearch}
              onChange={(e) => searchAppointments(e)}
            />
            <i className={styles.IconSearch} /* onClick={(e)=>onKeyUp(e,"search")} */></i>
          </div>
          
        </div>

        <article className={styles.Card}>
          <span className={styles.Date}>Datos de la Cita</span>
          <span className={styles.Patient}>Datos del Paciente</span>
          <span className={styles.Doctor}>Datos del Doctor</span>
        </article>

        {appointmentsFiltered.length === 0 && <NotFoundAppointment/> }

        {/** @return => mapea todos los appointments en el state appointment */}
        {appointmentsFiltered &&
          appointmentsFiltered?.map((appointment) => {
            return (
              <article className={styles.Card} key={appointment._id}>
                <div className={styles.AppointmentInfo}>
                  <img
                    src={iconAddress}
                    alt="alt-icon-fecha"
                    className={styles.iconSection}
                  />
                  <div className={styles.Info}>
                    <div>
                      <span>
                        <b>Fecha:</b>{" "}
                        {moment(appointment.date).utc().format("MM/DD/YYYY")}
                      </span>
                      <span> {appointment.hour}</span>
                    </div>
                    <span>
                      <b>Consultorio:</b> {appointment.doctor.address}
                    </span>
                  </div>
                </div>
                <div className={styles.PatientInfo}>
                  <img
                    src={iconPatient}
                    alt="alt-icon-fecha"
                    className={styles.iconSection}
                  />
                  <div className={styles.Info}>
                    <span>
                      <b>Paciente:</b> {appointment.patient.name}
                    </span>
                    <span>
                      <b>Email:</b> | {appointment.patient.email}
                    </span>
                  </div>
                </div>
                <div className={styles.DoctorInfo}>
                  <img
                    src={iconDoctor}
                    alt="alt-icon-fecha"
                    className={styles.iconSection}
                  />
                  <div className={styles.Info}>
                    <span>
                      <b>Doctor:</b> {appointment.doctor.name}
                    </span>
                    <span>
                      <b>Email:</b> {appointment.doctor.email}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
      </section>
    </>
  );
};

export default Appointments;
