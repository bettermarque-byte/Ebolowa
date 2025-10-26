import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/medicine.jpg"
import styles from "../../styles/HomePage/news.module.scss"

const NewsWrapper = () => {
  return (
    <div className={styles.news__wrapper}>
      <div className={styles.nw__left}>
        <div className={styles.nwl__one}>
          <span className={styles.nwo__span}>Éducation</span>
          <span className={styles.nwo__span}>Éducation</span>
        </div>
        <div className={styles.nwl__two}>
          <h3 className={styles.nwl__h3}>Le Collège Agricole d'Ébolowa accueille 250 nouveaux étudiants en formation</h3>
          <p className={styles.nwl__P}></p>
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