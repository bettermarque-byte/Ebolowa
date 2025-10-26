import React from 'react'
import styles from "../../styles/HomePage/news.module.scss"

const News = () => {
  return (
    <div className={`section ${styles.news__section}`}>
      <div className={`container ${styles.news__container}`}>
        <h2 className={styles.news__h2}></h2>
        <div className={styles.news__h}>

        </div>
      </div>
    </div>
  )
}

export default News