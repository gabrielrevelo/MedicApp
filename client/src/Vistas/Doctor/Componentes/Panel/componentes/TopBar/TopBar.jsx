import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./TopBar.module.css";
import menu from "./icon-menu.svg";
import { useEffect } from "react";
import { LOGOUT_ADMIN } from "../../../../../../context/config/routes/paths";

const TopBar = ({ imgProfile, setSection }) => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const onClickMenu = () => {
    setToggle(!toggle);
  };
  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const dataAdmin = JSON.parse(window.localStorage.getItem("User"));

  useEffect(() => {
    console.log(dataAdmin);
  }, []);

  return (
    <>
      <section className={styles.RightMenu}>
        <div className={styles.InfoAdmin}>
          <h3 className={styles.Name}>{dataAdmin.email}</h3>
          <span className={styles.Role}>{dataAdmin.rol}</span>
        </div>
        <div className={styles.Avatar}>
          <img
            src={imgProfile}
            alt="avatar-admin"
            className="object-cover w-[48px] h-[48px] rounded-full border-2 border-[#1479FF]"
          />
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
            <div className="md:hidden flex flex-col gap-5">
              <li>
                <button onClick={() => setSection("principal")}>
                  Principal
                </button>
              </li>
              <li>
                <button
                className="text-end" onClick={() => setSection("editarPerfil")}>
                  Editar Perfil
                </button>
              </li>
              <li>
                <button onClick={() => setSection("citas")}>Citas</button>
              </li>
            </div>
            <li className="text-blue-500">
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
