import React from "react";
import styles from "../../styles/HomePage/team.module.scss";

const SwiperLoader = ({
  height,
  height2,
  height3,
  aspectRatio,
}: {
  height: string;
  height2: string;
  height3: string;
  aspectRatio: string;
}) => {
  const buttonStyle = {
    "--height": height,
    "--height2": height,
    "--height3": background,
    "--aspectRatio": backHover,
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
