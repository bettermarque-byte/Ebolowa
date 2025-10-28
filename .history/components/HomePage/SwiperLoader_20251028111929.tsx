import React from "react";
import styles from "../../styles/HomePage/team.module.scss";

const SwiperLoader = ({height,}) => {
  return (
    <div className={styles.team__content2} style={{ height: "440px" }}>
      <div className={styles.teamc__wrapper}>
        <div
          className={styles.content__wrapper}
          style={{ aspectRatio: "10/13" }}
        ></div>
      </div>
    </div>
  );
};

export default SwiperLoader;
