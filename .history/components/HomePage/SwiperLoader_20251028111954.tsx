import React from "react";
import styles from "../../styles/HomePage/team.module.scss";

const SwiperLoader = ({height, aspectRatio}: {height: string, aspectRatio: string}) => {
  return (
    <div className={styles.team__content2} style={{ height: "440px" }}>
      <div className={styles.teamc__wrapper}>
        <div
          className={styles.content__wrapper}
          style={{ aspectRatio: aspectRatio }}
        ></div>
      </div>
    </div>
  );
};

export default SwiperLoader;
