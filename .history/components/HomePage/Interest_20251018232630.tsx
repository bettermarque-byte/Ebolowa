import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/cocoa.jpg";
import IMAGE2 from "../../public/images/doctor.jpg";
import IMAGE3 from "../../public/images/cocoa.jpg";
import InterestBox from "../ReUsables/InterestBox";
import styles from "../../styles/HomePage/interest.module.scss";

const Interest = () => {
  return (
    <div className={`section ${styles.interest__section}`}>
      <div className={`container ${styles.interest__container}`}>
        <h2 className={styles.interest__h2}>Nos Centres d'Intêrets</h2>
        <div className={styles.interest__content}>
          <InterestBox />
        </div>
      </div>
    </div>
  );
};

export default Interest;
