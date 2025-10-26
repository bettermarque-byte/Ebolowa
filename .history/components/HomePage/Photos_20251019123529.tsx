import React from 'react'
import styles from "../../styles/HomePage/photos.module.scss"

const Photos = () => {
  return (
    <div className={`section ${styles.photos__section}`}>
      <div className={`container ${styles.photos__container}`}>
      <h2 className={styles.interest__h2}>Nos Centres d'Intêrets</h2>
      </div>
    </div>
  )
}

export default Photos