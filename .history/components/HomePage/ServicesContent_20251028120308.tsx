import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings } from "@/utils";
import ServicesBox from "../ReUsables/ServicesBox";
import styles from "../../styles/HomePage/services.module.scss";
// Import Swiper styles
import "swiper/css";

const ServicesContent = () => {
  return (
    <div className={styles.services__slider}>
      <Swiper className={styles.serv__swiper} {...swiperSettings} speed={800}>
        {servicesContent.map((data, i) => (
          <SwiperSlide key={i} className={styles.serv__slide}>
            <ServicesBox data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesContent;
