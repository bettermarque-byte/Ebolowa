import React from "react";

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
