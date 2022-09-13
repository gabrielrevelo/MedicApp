import React from "react";
import BarChartDoctors from "../../DoctorsSection/Charts/BarChartDoctors";
import styles from "./DataResume.module.css";

const DoctorsGraphic = () => {
  return (
    <section className={styles.ContainerPatients}>
      <BarChartDoctors/>
    </section>
  );
};

export default DoctorsGraphic;
