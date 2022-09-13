import React from "react";
import styles from "./SectionsAdmins.module.css";
import iconClose from "../../assets/dashboard/close-icon.svg";
import iconLicense from "../../assets/dashboard/icon-license.png";
import iconEmail from "../../assets/dashboard/icon-email.png";
import bottomIcon from "../../assets/dashboard/back-bottom.svg";
import avatarDefault from "../../assets/dashboard/default-avatar.jpg";

const DetailAdmin = ({ admin, onClick }) => {

  return (
    <section className={styles.Form}>
      <img
        src={iconClose}
        alt="alt-close-icon"
        className={styles.ButtonClose}
        onClick={onClick}
      />
      <h2 className={styles.TitleModal}>Detalles del Admin</h2>
      <section className={styles.TopSection}>
        <img src={admin.image || avatarDefault} alt="doctor-img" className={styles.Image} />
        <div className={styles.InfoContainer}>
        <div className={styles.containerData}>
          <img src={iconLicense} alt="alt-icon-license" />
          <div>
            <p className={styles.Labels}>Nombre:</p>
            <span className={styles.Name}>{admin.name}</span>
          </div>
        </div>
        <div className={styles.containerData}>
          <img src={iconEmail} alt="alt-icon-license" />
          <div>
            <p className={styles.Labels}>Email:</p>
            <span className={styles.Email}>{admin.email}</span>
          </div>
        </div>
        <div className={styles.containerData}>
          <img src={iconLicense} alt="alt-icon-license" />
          <div>
            <p className={styles.Labels}>ID:</p>
            <span className={styles.Address}>{admin._id}</span>
          </div>
        </div>

        </div>
      </section>
      <img src={bottomIcon} alt="logo-medicapp" className={styles.imgBottom}/>
    </section>
  );
};

export default DetailAdmin;
