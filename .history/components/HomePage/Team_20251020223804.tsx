"use client";

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings } from "@/utils";
import styles from "../../styles/HomePage/team.module.scss"

const Team = () => {
  return (
    <div className={`section ${styles.team__section}`}>
      <div className={`container ${styles.team__container}`}>
      <h2 className={styles.services__h2}>{t("HomePage:services")}</h2>
      </div>
    </div>
  )
}

export default Team