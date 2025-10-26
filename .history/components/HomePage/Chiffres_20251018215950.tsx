import React from 'react'
import styles from "../../styles/HomePage/chiffres.module.scss"

const Chiffres = () => {
  return (
    <div className={`section ${styles.chiffres__section}`}>
      <div className={`container ${styles.chiffres__container}`}>
      <h2 className={styles.__h2}>Actualités de la ville</h2>
      </div>
    </div>
  )
}

export default Chiffres