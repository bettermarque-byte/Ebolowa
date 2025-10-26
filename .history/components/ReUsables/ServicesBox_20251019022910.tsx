import React from 'react'
import Docu
import styles from "../../styles/HomePage/services.module.scss";

const ServicesBox = () => {
  return (
    <div className={styles.serv__box}>
      <div className={styles.serv__svg}>
        <Document/>
      </div>
    </div>
  )
}

export default ServicesBox