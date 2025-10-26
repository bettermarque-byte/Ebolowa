import React from 'react'
import NewsWrapper from '../ReUsables/NewsWrapper'
import styles from "../../styles/HomePage/news.module.scss"

const News = () => {
  return (
    <div className={`section ${styles.news__section}`}>
      <div className={`container ${styles.news__container}`}>
        <h2 className={styles.news__h2}>Actualités de la ville</h2>
        <div className={styles.news__content}>
          <NewsWrapper />
          <NewsWrapper />
          <NewsWrapper />
          <NewsWrapper />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default News