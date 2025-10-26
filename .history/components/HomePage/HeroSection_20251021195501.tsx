import React from "react";
import IMAGE from "../../public/images/farming.jpg";
import { useTranslation } from "react-i18next";
import IMAGE2 from "../../public/images/cocoa.jpg";
import IMAGE3 from "../../public/images/doctor.jpg";
import IMAGE4 from "../../public/images/medicine.jpg";
// import BackgroundSlideshow from "./BackgroundSlideshow";
import styles from "../../styles/HomePage/herosection.module.scss";
import RoundedButton from "../ReUsables/RoundedButton";
import RoundedButtonTwo from "../ReUsables/RoundedButtonTwo";
import dynamic from "next/dynamic";

const BackgroundSlideshow = dynamic(() => import("./BackgroundSlideshow"), {
  ssr: false,
});

const HeroSection = () => {
  //Translations
  const { t, i18n } = useTranslation();

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
      {/* <BackgroundSlideshow images={backgroundImages} /> */}
      <div className={styles.content__section}>
        <div className={`container ${styles.hero__main}`}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__h3}>{t("HomePage:bienvenue")}</h1>
            <p className={styles.hero__p}>{t("HomePage:proposhero")}</p>
            <div className={styles.hero__cta}>
              <RoundedButton
                text={t("HomePage:savoir")}
                textTransform="initial"
                fontSize="var(--normal-font-size)"
                fontFamily="var(--medium-font)"
              />
              <RoundedButtonTwo
                text={t("HomePage:contact")}
                textTransform="initial"
                fontSize="var(--normal-font-size)"
                fontFamily="var(--medium-font)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
