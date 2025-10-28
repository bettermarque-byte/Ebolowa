import React from 'react'
import Image from "next/image";

const TeamContent = () => {
  return (
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
  )
}

export default TeamContent