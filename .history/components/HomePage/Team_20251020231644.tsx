"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import IMAGE from "../../public/images/mayor.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings } from "@/utils";
import styles from "../../styles/HomePage/team.module.scss";

const Team = () => {
  //Translations
  const { t, i18n } = useTranslation();

  const teamsData = [
    {
      name: "EDJO'O Daniel",
      position: t("HomePage:adjoint1"),
      image: IMAGE,
    },
    {
      name: "EDJO'O Daniel",
      position: t("HomePage:adjoint2"),
      image: IMAGE,
    },
    {
      name: "BITOUMOU Joel",
      position: t("HomePage:ebwa1"),
      image: IMAGE,
    },
    {
      name: "BENGONG André",
      position: t("HomePage:ebwa2"),
      image: IMAGE,
    },
    {
      name: "AKOM Mvondo",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "BOMBO Oumarou",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "DALLE Louis",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "EDI'I Charles",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "EDJO'O Niki",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "MEDJO Maxime",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "MVONDO Blaise",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "MVONDO ZE Gilbert",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "NKOTTO Dénis",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "NKOULOU Jean",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "NOUKIMI André",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "ASSAKO Thierry",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "TASSI PONG",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "ZIBI Florent",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "FOE Bénédicte",
      position: t("HomePage:conseillere"),
      image: IMAGE,
    },
    {
      name: "PADIMATOU Yaya",
      position: t("HomePage:conseillere"),
      image: IMAGE,
    },
    {
      name: "MBILI Jean",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
    {
      name: "MVONDO Frank",
      position: t("HomePage:conseiller"),
      image: IMAGE,
    },
  ];

  return (
    <div className={`section ${styles.team__section}`}>
      <div className={`container ${styles.team__container}`}>
        <h2 className={styles.team__h2}>{t("HomePage:leselus")}</h2>
        <div className={styles.team__content}>
          <div className={styles.team__wrapper}>
            <Swiper>
              
            </Swiper>
            <Image
              fill
              quality={100}
              src={IMAGE}
              placeholder="blur"
              alt="Image"
            />
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
