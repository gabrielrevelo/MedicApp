import React from "react";
import styles from "./NavbarAdmin.module.css";
import logo from "../../../assets/ico.png";
import iconHome from "../../../assets/dashboard/home-icon.svg";
import iconPatient from "../../../assets/dashboard/user-icon.svg";
import iconDoctor from "../../../assets/dashboard/doctor-icon.svg";
import iconAdmin from "../../../assets/dashboard/admin-icon.svg";
import iconAppointment from "../../../assets/dashboard/date-icon.svg";
import { useDispatch } from "react-redux";
import { changeSectionDashboard } from "../../../../../Redux/actions/generalActionsAdmins";
import { Link } from "react-router-dom";
import { HOME_ADMIN } from "../../../../../context/config/routes/paths";

const NavbarAdmin = () => {

  const dispatch = useDispatch();

  const changeItemMenu = (section) =>{
    dispatch(changeSectionDashboard(section));
  }
  
  return (
    <>
      <nav className={styles.HeaderContainer}>
        <div className={styles.MenuTopContainer}>
          <div className={styles.LogoContainer}>
            <Link to={HOME_ADMIN}>
              <img src={logo} alt="logo-medicapp" className={styles.Logo} />
            </Link>
            <h4>
              Admin <b>Panel</b>
            </h4>
          </div>
          <ul className={styles.ListContainer}>
            <li className={styles.ListItem}>
              <img src={iconHome} alt="img-icon-menu"/>
              <button onClick={() => changeItemMenu("Dashboard")}>Dashboard</button> 
            </li>
            <li className={styles.ListItem}>
              <img src={iconPatient} alt="img-icon-menu"/>
              <button onClick={() => changeItemMenu("Pacientes")}>Pacientes</button> 
            </li>
            <li className={styles.ListItem}>
              <img src={iconDoctor} alt="img-icon-menu"/>
              <button onClick={() => changeItemMenu("Doctores")}>Doctores</button>
            </li>
            <li className={styles.ListItem}>
              <img src={iconAdmin} alt="img-icon-menu"/>
              <button onClick={() => changeItemMenu("Admins")}>Admins</button>
            </li>
            <li className={styles.ListItem}>
              <img src={iconAppointment} alt="img-icon-menu"/>
              <button onClick={() => changeItemMenu("Citas")}>Citas</button>
            </li>
          </ul>
        </div>

        

        <div>
          <span className={styles.FooterText}>MedicApp 2022</span>
        </div>
      </nav>
    </>
  );
};

export default NavbarAdmin;
