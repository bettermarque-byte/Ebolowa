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
      svg: Documented,
      name: "Démarches administratives",
      link: "/"
    },
    {
      svg: Keys,
      name: "Location de salles",
      link: "/"
    },
    {
      svg: Handshake,
      name: "Commerces et associations",
      link: "/"
    },
    {
      svg: Urbanism,
      name: "Urbanisme",
      link: "/"
    },
    {
      svg: Police,
      name: "Police",
      link: "/"
    }
  ]

  return (
    <div className={`section ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
        <h2 className={styles.services__h2}>Services et infos pratiques</h2>
        <div className={styles.services__slider}>
          {
            servicesContent.map((data, i) => (
              
              <ServicesBox key={i}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
