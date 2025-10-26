import React from "react";
import 
import styles from "../../styles/HomePage/services.module.scss";
import ServicesBox from "../ReUsables/ServicesBox";

const Services = () => {
  return (
    <div className={`section ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
        <h2 className={styles.services__h2}>Services et infos pratiques</h2>
        <div className={styles.services__slider}>
          <ServicesBox />
          <ServicesBox />
          <ServicesBox />
          <ServicesBox />
        </div>
      </div>
    </div>
  );
};

export default Services;
