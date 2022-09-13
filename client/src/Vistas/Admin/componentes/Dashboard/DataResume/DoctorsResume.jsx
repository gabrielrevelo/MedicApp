import React from "react";
import styles from "./DataResume.module.css";
import { useSelector } from "react-redux";
import avatarDefault from "../../../assets/dashboard/default-avatar.jpg";
import { useDispatch } from "react-redux";
import { changeSectionDashboard } from "../../../../../Redux/actions/generalActionsAdmins";

const Doctors = ({ iconTitle, iconActive, iconInactive }) => {
  const { doctors } = useSelector((state) => state.generalDoctors);
  const dispatch = useDispatch();

  const changeSection= (section) =>{
    dispatch(changeSectionDashboard(section));
  }

  return (
    <section className={styles.ContainerDoctors}>
      <div className={styles.TitleContainerAlternate}>
        <h4 className={styles.ContainerDoctorTitle}>
          <img src={iconTitle} alt="alt-img-title-icon" />
          Nuevos Doctores en <b>MedicApp</b>
        </h4>
        <button onClick={()=>changeSection("Doctores")}>Ver Todos</button>
      </div>
      {doctors &&
        doctors.slice(doctors.length - 6, doctors.length - 1).map((doctor) => {
          return (
            <article className={styles.CardDoctorDashboard} key={doctor._id}>
              <div className={styles.Avatar}>
                <img src={doctor.image || avatarDefault} alt="avatar-img" />
              </div>
              <h5>{doctor.name}</h5>
              <span className={styles.Email}>{doctor.email}</span>
              <span className={doctor.active ? styles.isActive :styles.isInactive}>
                <img src={doctor.active ? iconActive :iconInactive} alt="icon-status" /> {doctor.active ? "Active" : "Inactive" }
              </span>
            </article>
          );
        })}
    </section>
  );
};

export default Doctors;
