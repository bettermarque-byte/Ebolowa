import React from "react";
import IMAGE from "../../public/images/cocoa.jpg";
import IMAGE2 from "../../public/images/doctor.jpg";
import IMAGE3 from "../../public/images/farming.jpg";
import InterestBox from "../ReUsables/InterestBox";
import Keys from "@/utils/icons/Keys";
import styles from "../../styles/HomePage/interest.module.scss";
import Handshake from "@/utils/icons/Handshake";

const Interest = () => {
  const interestData = [
    {
      name: "Attractions",
      image: IMAGE,
      link: "/",
    },
    {
      name: "Gastronomie",
      image: IMAGE2,
      link: "/",
    },
    {
      name: "Hébergement",
      image: IMAGE3,
      link: "/",
    },
  ];
  return (
    <div className={`section ${styles.interest__section}`}>
      <div className={`container ${styles.interest__container}`}>
        <h2 className={styles.interest__h2}>Nos Centres d'Intêrets</h2>
        <div className={styles.interest__content}>
          {interestData.map((data, i) => (
            <InterestBox key={i} data={data}/>
          ))}
        </div>
      </div>
      <Keys/>
      <Handshake />
    </div>
  );
};

export default Interest;
