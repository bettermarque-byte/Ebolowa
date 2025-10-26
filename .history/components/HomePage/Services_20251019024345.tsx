import React from "react";
import Documented from "@/utils/icons/Documented";
import Keys from "@/utils/icons/Keys";
import Handshake from "@/utils/icons/Handshake";
import Urbanism from "@/utils/icons/Urbanism";
import Police from "@/utils/icons/Police";
import styles from "../../styles/HomePage/services.module.scss";
import ServicesBox from "../ReUsables/ServicesBox";

const Services = () => {
  const servicesContent = [
    {
      svg: D
    }
  ]
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
