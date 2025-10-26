import React from 'react'
import styles from "../../styles/HomePage/chiffres.module.scss"

const ChiffresWrapper = () => {
  return (
    <div className={styles.chiffres__wrapper}>
      <div className={styles.cw__top}>
        <span className={styles.cw__span}>Communes et Arrondissements</span>
        <span className={styles.cw__number}>2</span>
      </div>

        <p>Deux entités administratives locales coordonnent les services et le développement local durable.</p>

    </div>
  )
}

export default ChiffresWrapper