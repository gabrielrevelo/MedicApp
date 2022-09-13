import React from "react";
import styles from "./TopDoctors.module.css";

import iconAdress from "../../imagenes compartidas/icon-address.png";
import iconClock from "../../imagenes compartidas/icon-clock.png";
import iconStar from "../../imagenes compartidas/icon-star.png";

const TopDoctors = ({id, name, specialities, rating, schedule, address, image}) => {
  return (
    <>
      <section className={styles.Card}>
        <div className={styles.TopCard}>
          <img
            src={image || "https://i.blogs.es/01a6e2/the-good-doctor/1366_2000.jpeg" }
            alt="img-doctor"
          />
          <div>
            <h3>Dr. {name}</h3>
            <span className={styles.Speciality}>{specialities.join(" | ")}</span>
            <div className={styles.ContainerHours}>
              <span className={styles.Rating}> <img src={iconStar} alt="alt-icon-star"/>{rating}</span>
              <span className={styles.Hours}>
              <img src={iconClock} alt="alt-icon-clock"/> {schedule}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.BottomCard}>
          <div className={styles.BottomAddress}>
            <span>
              Consultorio:
            </span>
            <span> <img src={iconAdress} alt="alt-icon-adress"/>{address}</span>
          </div>
          <button>Ver Perfil</button>
        </div>
      </section>
    </>
  );
};

export default TopDoctors;
