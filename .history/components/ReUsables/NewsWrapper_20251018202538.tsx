import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/medicine.jpg"
import styles from "../../styles/HomePage/news.module.scss"

const NewsWrapper = () => {
  return (
    <div className={styles.news__wrapper}>
      <div className={styles.nw__left}>
        <div className={styles.nwl__one}>
          <span className={styles.nw}></span>
        </div>
        <div className={styles.nwl__two}>

        </div>
        <div className={styles.nwl__three}>

        </div>
      </div>
      <div className={styles.nw__right}>

      </div>
    </div>
  )
}

export default NewsWrapper