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
            <Image fill quality={100} src={IMAGE}/>
          </div>
          <div className={styles.edito__right}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Editorial