import React from 'react';
import styles from "./DataResume.module.css";
import avatar from "../../../assets/dashboard/avatar-test.jpeg";
import iconActive from "../../../assets/dashboard/status-icon.svg";
import iconInactive from "../../../assets/dashboard/status-icon-inactive.svg";
import iconTitle from "../../../assets/ico-dark.png";
import DoctorsResume from './DoctorsResume';
import PatientsResume from './PatientsResume';
import PatientsGraphic from './PatientsGraphic';
import DoctorsGraphic from './DoctorsGraphic';

const DataResume = () => {
  return (
    <>
    <section className={styles.ContainerDataGraphics}>
      <PatientsGraphic/>
      <DoctorsGraphic/>
    </section>
    <section className={styles.ContainerData}>
      <PatientsResume avatar={avatar} iconTitle={iconTitle} iconActive={iconActive} iconInactive={iconInactive}/>
      <DoctorsResume avatar={avatar} iconTitle={iconTitle} iconActive={iconActive} iconInactive={iconInactive}/>
    </section>      
  </>
  )
}

export default DataResume;