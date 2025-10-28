import React from "react";
import styles from "../../styles/HomePage/team.module.scss";

const SwiperLoader = ({
  height,
  height2,
  height
  aspectRatio,
}: {
  height: string;
  aspectRatio: string;
}) => {
  const buttonStyle = {
    "--border": border,
    "--borderhover": borderHover,
    "--background": background,
    "--backhover": backHover,
    "--color": color,
    "--colorhover": colorHover,
  } as React.CSSProperties;

  return (
    <div className={styles.team__content2} style={{ height: height }}>
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
