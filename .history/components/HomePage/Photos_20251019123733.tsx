import React from 'react'
import styles from "../../styles/HomePage/photos.module.scss"

const Photos = () => {
  return (
    <div className={`section ${styles.photos__section}`}>
      <div className={`container ${styles.photos__container}`}>
      <h2 className={styles.interest__h2}>Vivez Ebolowa en Photos</h2>
      <div className={styles.photos__content}>
        <div className={styles.pc__top}>

        </div>
        <div className={styles.pc__top}>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Photos