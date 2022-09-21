import React, { useState } from "react";
import { Link} from "react-router-dom";
import styles from "../../../Doctor/Componentes/Panel/componentes/TopBar/TopBar.module.css";
import menu from "./icon-menu.svg"
import { useEffect } from "react";
import { LOGOUT_PATIENT } from "../../../../../../client/src/context/config/routes/paths";

const TopBar = ({imgProfile, setSection}) => {

  const [toggle, setToggle] = useState(false);


  const onClickMenu = () => {
    setToggle(!toggle);
  };


  const dataAdmin = JSON.parse(window.localStorage.getItem('User'));

  useEffect(()=>{
    console.log(dataAdmin);

  },[dataAdmin])

  return (
    <>
      <section className={styles.RightMenu}>
        <div className={styles.InfoAdmin}>
          <h3 className={styles.Name}>{dataAdmin.email}</h3>
          <span className={styles.Role}>{dataAdmin.rol}</span>
        </div>
        <div className={styles.Avatar}>
          <img src={imgProfile} alt="avatar-admin" className="object-cover w-[48px] h-[48px] rounded-full border-2 border-[#1479FF]"/>
        </div>
        <div className={styles.Dropdown} >
          <img src={menu} alt="menu-icon" className={styles.IconMenu} onClick={(e) => onClickMenu(e)} />
          <ul className={toggle ?`${styles.Menu} ${styles.MenuOpen}`: styles.Menu}>
            <li className="text-center"><Link to="/admin/home">Inicio</Link></li>
            <li className="lg:hidden text-center">
              <button onClick={() => setSection("principal")}>Principal</button>
            </li>
            <li className="">
              <button>Editar Perfil</button>
            </li>
            <li className="lg:hidden text-center">
              <button onClick={() => setSection("citas")}>Citas</button>
            </li>
            <li className="lg:hidden text-center">
              <button onClick={() => setSection("favoritos")}>Favoritos</button>
            </li>
            <li className="text-center"><Link to={LOGOUT_PATIENT}> Cerrar sesion</Link></li>
          </ul>
        </div>
        
      </section>
     {/*  <Banner/> */}
    </>
  );
};

export default TopBar;