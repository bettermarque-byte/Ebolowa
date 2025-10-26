import React from "react";
import styles from "../../styles/HomePage/chiffres.module.scss";

interface ChiffresProps{
  name: string;
  number: number;
  text: string
}

const ChiffresWrapper = ({data}: {data: ChiffresProps}) => {
  return (
    <div className={styles.chiffres__wrapper}>
      <div className={styles.cw__top}>
        <span className={styles.cw__span}>{data.name}</span>
        <span className={styles.cw__number}>{data.number}</span>
      </div>
      <p className={styles.cw__p}>
        {data.}
      </p>
    </div>
  );
};

export default ChiffresWrapper;
