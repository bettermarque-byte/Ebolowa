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

  const teamsData = [
    {
      name: "EDJO'O Daniel",
      position: "Maire Adjoint I",
      image: IMAGE
    },
    {
      name: "EDJO'O Daniel",
      position: "Maire Adjoint II",
      image: IMAGE
    },
    {
      name: "AKOM Mvondo Moise",
      position: "Maire Adjoint I",
      image: IMAGE
    },
    {
      name: "EDJO'O Daniel",
      position: "Maire Adjoint I",
      image: IMAGE
    },
    {
      name: "EDJO'O Daniel",
      position: "Maire Adjoint I",
      image: IMAGE
    },
    {
      name: "EDJO'O Daniel",
      position: "Maire Adjoint I",
      image: IMAGE
    },
    {
      name: "EDJO'O Daniel",
      position: "Maire Adjoint I",
      image: IMAGE
    },
    {
      name: "EDJO'O Daniel",
      position: "Maire Adjoint I",
      image: IMAGE
    },

  ]

  return (
    <div className={`section ${styles.team__section}`}>
      <div className={`container ${styles.team__container}`}>
        <h2 className={styles.team__h2}>{t("HomePage:leselus")}</h2>
        <div className={styles.team__content}>
          <div className={styles.team__wrapper}>
            <Image fill quality={100} src={IMAGE} placeholder="blur" alt="Image"/>
            <div className={styles.team__data}>
              <span className={styles.team__name}>EDJO'O Daniel</span>
              <span className={styles.team__position}>Maire</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
