import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TopBar.module.css";
import avatar from "../../../assets/dashboard/avatar-test.jpeg";
import menu from "../../../assets/dashboard/menu-icon.svg";
import Banner from "../../Dashboard/Banner/Banner";
import { changeSectionDashboard } from "../../../../../Redux/actions/generalActionsAdmins";
import { LOGOUT_ADMIN } from "../../../../../context/config/routes/paths";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const TopBar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const changeItemMenu = (section) => {
    dispatch(changeSectionDashboard(section));
  };

  const onClickMenu = () => {
    setToggle(!toggle);
  };

  const dataAdmin = JSON.parse(window.localStorage.getItem("User"));

  const sizeWindow = window.screen.width;

  return (
    <>
      <section className={styles.RightMenu}>
        <div className={styles.InfoAdmin}>
          <h3 className={styles.Name}>{dataAdmin.email}</h3>
          <span className={styles.Role}>{dataAdmin.rol}</span>
        </div>
        <div className={styles.Avatar}>
          <img src={avatar} alt="avatar-admin" />
        </div>
        <div className={styles.Dropdown}>
          <img
            src={menu}
            alt="menu-icon"
            className={styles.IconMenu}
            onClick={(e) => onClickMenu(e)}
          />
          <ul
            className={
              toggle ? `${styles.Menu} ${styles.MenuOpen}` : styles.Menu
            }
          >
            <li>
              <Link to="/admin/home">Inicio</Link>
            </li>

            {sizeWindow < 700 && (
              <>
                <li>
                  <button onClick={() => changeItemMenu("Dashboard")}>
                    Dashboard
                  </button>
                </li>
                <li>
                  <button onClick={() => changeItemMenu("Pacientes")}>
                    Pacientes
                  </button>
                </li>
                <li>
                  <button onClick={() => changeItemMenu("Doctores")}>
                    Doctores
                  </button>
                </li>
                <li>
                  <button onClick={() => changeItemMenu("Admins")}>
                    Admins
                  </button>
                </li>
                <li>
                  <button onClick={() => changeItemMenu("Citas")}>Citas</button>
                </li>
              </>
            )}
            <li>
              <Link to={LOGOUT_ADMIN}>Cerrar sesion</Link>
            </li>
          </ul>
        </div>
      </section>
      {/*  <Banner/> */}
    </>
  );
};

export default TopBar;
