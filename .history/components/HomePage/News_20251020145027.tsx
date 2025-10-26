import React from "react";
import { useTranslation } from "react-i18next";
import NewsWrapper from "../ReUsables/NewsWrapper";
import RoundedButton from "../ReUsables/RoundedButton";
import styles from "../../styles/HomePage/news.module.scss";

const News = () => {
  //Translations
  const { t, i18n } = useTranslation();

  const newsData = [
    {
      name: "Coopération, Ebolowa au laborium DE L’AIMF EN SUISSE"
    }
  ]

  return (
    <div className={`section ${styles.news__section}`}>
      <div className={`container ${styles.news__container}`}>
        <h2 className={styles.news__h2}>{t("HomePage:actualites")}</h2>
        <div className={styles.news__content}>
          <NewsWrapper />
          <NewsWrapper />
          <NewsWrapper />
          <NewsWrapper />
        </div>
        <div className={styles.news__button}>
          <RoundedButton
            text="Toutes les Actus"
            textTransform="initial"
            fontSize="var(--normal-fontt-size)"
            fontFamily="var(--medium-font)"
            border="1px solid transparent"
            borderHover="1px solid var(--green)"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
