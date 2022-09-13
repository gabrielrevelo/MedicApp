import React from "react";
import styles from "./SectionsDoctors.module.css";
import iconClose from "../../assets/dashboard/close-icon.svg";
import iconLicense from "../../assets/dashboard/icon-license.png";
import iconEmail from "../../assets/dashboard/icon-email.png";
import iconAddress from "../../assets/dashboard/icon-address.png";
import iconSpeciality from "../../assets/dashboard/icon-speciality.png";
import bottomIcon from "../../assets/dashboard/back-bottom.svg";

const DetailDoctor = ({ doctor, onClick }) => {

  return (
    <section className={styles.Form}>
      <img
        src={iconClose}
        alt="alt-close-icon"
        className={styles.ButtonClose}
        onClick={onClick}
      />
      <h2 className={styles.TitleModal}>Detalles del Doctor</h2>
      <section className={styles.TopSection}>
        <img src={doctor.image} alt="doctor-img" className={styles.Image} />
        <div className={styles.InfoContainer}>
          <div>
            <p className={styles.Labels}>Nombre:</p>
            <h3 className={styles.Name}>{doctor.name}</h3>
          </div>
          <div>
            <p className={styles.Labels}>Teléfono:</p>
            <span className={styles.phoneNumber}>{doctor.phoneNumber}</span>
          </div>
          <div>
            <p className={styles.Labels}>Ciudad:</p>
            <span className={styles.City}>{doctor.city}</span>
          </div>

        </div>
      </section>
      <section className={styles.BottomSection}>
        <div className={styles.containerData}>
          <img src={iconLicense} alt="alt-icon-license" />
          <div>
            <p className={styles.Labels}>Licencia Médica:</p>
            <span className={styles.License}>N° {doctor.license}</span>
          </div>
        </div>
        <div className={styles.containerData}>
          <img src={iconEmail} alt="alt-icon-license" />
          <div>
            <p className={styles.Labels}>Email:</p>
            <span className={styles.Email}>{doctor.email}</span>
          </div>
        </div>
        <div className={styles.containerData}>
          <img src={iconAddress} alt="alt-icon-license" />
          <div>
            <p className={styles.Labels}>Consultorio:</p>
            <span className={styles.Address}>{doctor.address}</span>
          </div>
        </div>

        <div className={styles.containerData}>
          <img src={iconSpeciality} alt="alt-icon-license" />
          <div>
            <p className={styles.Labels}>Especialidades:</p>
            {doctor.specialities &&
              doctor.specialities?.map((speciality, index) => {
                return (
                  <span className={styles.Speciality} key={index}>
                    {speciality}
                  </span>
                );
              })}
          </div>

        </div>
      </section>
      <img src={bottomIcon} alt="logo-medicapp" className={styles.imgBottom}/>
    </section>
  );
};

export default DetailDoctor;
