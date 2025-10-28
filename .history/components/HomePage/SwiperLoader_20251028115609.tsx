import React from "react";
import styles from "../../styles/HomePage/team.module.scss";

const SwiperLoader = ({
  height,
  height2,
  height3,
  aspectRatio,
  numberr,
}: {
  height: string;
  height2: string;
  height3: string;
  aspectRatio: string;
  numberr: number;
}) => {
  const buttonStyle = {
    "--height": height,
    "--height2": height2,
    "--height3": height3,
  } as React.CSSProperties;

  const numbers = Array.from({ length: numberr }, (_, i) => i + numberr);
  console.log(numbers);

  return (
    <div className={styles.team__content2} style={buttonStyle}>
      {numbers.map((num, i) => (
        <div className={styles.teamc__wrapper} key={i}>
          <div
            className={styles.content__wrapper}
            style={{ aspectRatio: aspectRatio }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default SwiperLoader;
