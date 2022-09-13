import React from "react";
import BarChartPatients from "../../PatientsSection/Charts/BarChartPatients";
import styles from "./DataResume.module.css";

const PatientsGraphic = () => {
  return (
    <section className={styles.ContainerPatients}>
      <BarChartPatients/>
    </section>
  );
};

export default PatientsGraphic;
