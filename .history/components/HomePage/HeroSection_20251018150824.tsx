import React from "react";
import IMAGE from "../../public/images/farming.jpg";
import IMAGE2 from "../../public/images/cocoa.jpg";
import IMAGE3 from "../../public/images/doctor.jpg";
import IMAGE4 from "../../public/images/medicine.jpg";
import BackgroundSlideshow from "./BackgroundSlideshow";
import styles from "../../styles/HomePage/herosection.module.scss";

const HeroSection = () => {
  const backgroundImages = [
    {
      src: IMAGE,
      alt: "Farming",
    },
    {
      src: IMAGE2,
      alt: "Farming",
    },
    {
      src: IMAGE3,
      alt: "Farming",
    },
    {
      src: IMAGE4,
      alt: "Farming",
    },
  ];
  return (
    <div className={styles.hero__section}>
      <BackgroundSlideshow images={backgroundImages} />
      <div className={styles.content__section}>
        <div className={`container ${styles.hero__main}`}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__h3}>
              Bienvenue à la Communauté Urbaine d’Ebolowa
            </h1>
            <p className={styles.hero__p}>
              Ebolowa, une ville dynamique, solidaire et tournée vers l’avenir,
              au cœur du développement agro-pastoral du Cameroun.
            </p>
            <div className={styles.}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
