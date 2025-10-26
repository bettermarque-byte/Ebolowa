"use client";

import React from "react";
import Documented from "@/utils/icons/Documented";
import Keys from "@/utils/icons/Keys";
import { useTranslation } from "react-i18next";
import Handshake from "@/utils/icons/Handshake";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings } from "@/utils";
import Urbanism from "@/utils/icons/Urbanism";
import Police from "@/utils/icons/Police";
import styles from "../../styles/HomePage/services.module.scss";
import ServicesBox from "../ReUsables/ServicesBox";

// Import Swiper styles
import "swiper/css";

const Services = () => {
  //Translations
  const { t, i18n } = useTranslation();

  const servicesContent = [
    {
      svg: Documented,
      name: t("HomePage:admin"),
      link: "/",
    },
    {
      svg: Keys,
      name: t("HomePage:bienvenue"),
      link: "/",
    },
    {
      svg: Handshake,
      name: "Commerces et associations",
      link: "/",
    },
    {
      svg: Urbanism,
      name: "Urbanisme",
      link: "/",
    },
    {
      svg: Police,
      name: "Police",
      link: "/",
    },
  ];

  return (
    <div className={`section ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
        <h2 className={styles.services__h2}>Services et infos pratiques</h2>
        <div className={styles.services__slider}>
          <Swiper
            className={styles.serv__swiper}
            {...swiperSettings}
            speed={800}
          >
            {servicesContent.map((data, i) => (
              <SwiperSlide key={i} className={styles.serv__slide}>
                <ServicesBox data={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Services;
