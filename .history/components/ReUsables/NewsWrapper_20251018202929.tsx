import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/medicine.jpg"
import RoundedButton from './RoundedButton'
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
          <p className={styles.nwl__p}>Ces jeunes bénéficieront d'une formation pratique en agriculture moderne, transformation du cacao et gestion de coopératives pour devenir entrepreneurs.</p>
        </div>
        <div className={styles.nwl__three}>
        <RoundedButton text="Lire la suite" textTransform= "initial" fontSize="var(--normal-fontt-size)" fontFamily="var(--medium-font)" border="1px solid transparent" borderHover="1px solid var(--green)"/>
        <span className={styles.date}>1 Septembre 2025</span>
        </div>
      </div>
      <div className={styles.nw__right}>
        <Image fill/>
      </div>
    </div>
  )
}

export default NewsWrapper