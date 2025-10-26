import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/mayor.jpg"
import styles from "../../styles/HomePage/editorial.module.scss"

const Editorial = () => {
  return (
    <div className={`section ${styles.edito__section}`}>
      <div className={`container ${styles.edito__container}`}>
        <div className={styles.edito__wrapper}>
          <div className={styles.edito__left}>
            <Image fill quality={100} src={IMAGE} alt='Mayor of Ebolowa'/>
          </div>
          <div className={styles.edito__right}>
            <div className={styles.er__one}>
              <p>Bienvenue au site de la ville d’Ebolowa</p>
              <h3>Message du maire</h3>
            </div>
            <div className={styles.er__two}>
              <span></span>
            </div>
            <div className={styles.er__three}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editorial