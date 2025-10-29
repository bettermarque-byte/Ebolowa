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
import SwiperLoader from "./SwiperLoader";
import dynamic from "next/dynamic";
import ServicesBox from "../ReUsables/ServicesBox";

// Import Swiper styles
import "swiper/css";

const ServicesContent = dynamic(() => import("./ServicesContent"), {
  ssr: false,
  loading: () => (
    <SwiperLoader
      height="440px"
      height2="382px"
      height3="360px"
      aspectRatio="1"
      numberr={5}
    />
  ),
});
const Services = () => {
  //Translations
  const { t } = useTranslation();


  const servicesContent = [
    {
      svg: Documented,
      name: t("HomePage:admin"),
      link: "/",
    },
    {
      svg: Keys,
      name: t("HomePage:location"),
      link: "/",
    },
    {
      svg: Handshake,
      name: t("HomePage:commerce"),
      link: "/",
    },
    {
      svg: Urbanism,
      name: t("HomePage:urbanisme"),
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
        <h2 className={styles.services__h2}>{t("HomePage:services")}</h2>
        <ServicesContent servicesContent={servicesContent}/>
      </div>
    </div>
  );
};

export default Services;
