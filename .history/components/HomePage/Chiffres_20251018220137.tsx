import React from 'react'
import ChiffresWrapper from '../ReUsables/ChiffresWrapper'
import styles from "../../styles/HomePage/chiffres.module.scss"

const Chiffres = () => {
  return (
    <div className={`section ${styles.chiffres__section}`}>
      <div className={`container ${styles.chiffres__container}`}>
      <h2 className={styles.chiff__h2}>Ebolowa en chiffres</h2>
      <div className={styles.chiff__content}>
        <ChiffresWrapper />
      </div>
      </div>
    </div>
  )
}

export default Chiffres