"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import IMAGE from "../../public/images/mayor.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings } from "@/utils";
import styles from "../../styles/HomePage/team.module.scss";

const Team = () => {
  //Translations
  const { t, i18n } = useTranslation();

  return (
    <div className={`section ${styles.team__section}`}>
      <div className={`container ${styles.team__container}`}>
        <h2 className={styles.services__h2}>{t("HomePage:leselus")}</h2>
        <div className={styles.team__content}>
          <div className={styles.team__wrapper}>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
