"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import IMAGE from "../../public/images/elected/one.jpg";
import IMAGE2 from "../../public/images/elected/one.jpg";
import IMAGE3 from "../../public/images/elected/one.jpg";
import IMAGE4 from "../../public/images/elected/one.jpg";
import IMAGE5 from "../../public/images/elected/one.jpg";
import IMAGE6 from "../../public/images/elected/one.jpg";
import IMAGE7 from "../../public/images/elected/one.jpg";
import IMAGE8 from "../../public/images/elected/one.jpg";
import IMAGE9 from "../../public/images/elected/one.jpg";
import IMAGE10 from "../../public/images/elected/one.jpg";
import IMAGE11 from "../../public/images/elected/one.jpg";
import IMAGE12 from "../../public/images/elected/one.jpg";
import IMAGE13 from "../../public/images/elected/one.jpg";
import IMAGE14 from "../../public/images/elected/one.jpg";
import IMAGE15 from "../../public/images/elected/one.jpg";
import IMAGE16 from "../../public/images/elected/one.jpg";
import IMAGE17 from "../../public/images/elected/one.jpg";
import IMAGE from "../../public/images/elected/one.jpg";
import IMAGE from "../../public/images/elected/one.jpg";
import IMAGE from "../../public/images/elected/one.jpg";
import IMAGE from "../../public/images/elected/one.jpg";
import IMAGE from "../../public/images/elected/one.jpg";
import IMAGE from "../../public/images/elected/one.jpg";
import IMAGE from "../../public/images/elected/one.jpg";
import IMAGE from "../../public/images/elected/one.jpg";
import IMAGE from "../../public/images/elected/one.jpg";
import IMAGE from "../../public/images/elected/one.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings2 } from "@/utils";
import styles from "../../styles/HomePage/team.module.scss";

// Import Swiper styles
import "swiper/css";

const Team = () => {
  //Translations
  const { t } = useTranslation();

  const teamsData = [
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
          <Swiper
            className={styles.team__swiper}
            {...swiperSettings2}
            speed={800}
          >
            {teamsData.map((data, i) => (
              <SwiperSlide key={i} className={styles.team__slide}>
                <div className={styles.team__wrapper}>
                  <Image
                    fill
                    quality={100}
                    src={data.image}
                    placeholder="blur"
                    alt={data.name}
                  />
                  <div className={styles.team__data}>
                    <span className={styles.team__name}>{data.name}</span>
                    <span className={styles.team__position}>
                      {data.position}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Team;
