import React from 'react';
import styles from "./Appointments.module.css";
import notFound from "../../assets/dashboard/not-found.svg";

const NotFoundAppointment = () => {
  return (
    <section className={styles.NotFoundVector}>
      <img src={notFound} alt="not-found-appointments" />
      <h3>No encontramos resultados</h3>
    </section>
  )
}

export default NotFoundAppointment;