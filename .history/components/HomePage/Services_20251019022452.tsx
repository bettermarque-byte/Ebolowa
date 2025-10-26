import React from 'react'
import styles from "../../styles/HomePage/services.module.scss"

const Services = () => {
  return (
    <div className={`section ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
      <h2 className={styles.interest__h2}>Nos Centres d'Intêrets</h2>
      </div>
    </div>
  )
}

export default Services