import React from "react";
import { useTranslation } from "react-i18next";
import NewsWrapper from "../ReUsables/NewsWrapper";
import RoundedButton from "../ReUsables/RoundedButton";
import IMAGE from "../../public/images/news1.jpeg"
import IMAGE2 from "../../public/images/news1.jpeg"
import IMAGE3 from "../../public/images/news1.jpeg"
import IMAGE4 from "../../public/images/news1.jpeg"
import styles from "../../styles/HomePage/news.module.scss";

const News = () => {
  //Translations
  const { t, i18n } = useTranslation();

  const newsData = [
    {
      name: t("HomePage:news1Title"),
      text: t("HomePage:news1Text"),
      date: t("HomePage:news1Date"),
      image: IMAGE,
      tags: [t("HomePage:cooperation"), t("HomePage:gouvernance")]
    },
    {
      name: t("HomePage:news2Title"),
      text: t("HomePage:news2Text"),
      date: t("HomePage:news2Date"),
      image: IMAGE3,
      tags: [t("HomePage:civisme"), t("HomePage:gouvernance")]
    },
    {
      name: t("HomePage:news3T"),
      text: t("HomePage:news3Text"),
      date: t("HomePage:news3Text"),
      image: IMAGE2,
      tags: ["Énergie", "dDéveloppement"]
    },
    {
      name: "Politique Alimentaire Urbaine, le déclic de FoodClic!",
      text: "Sous l’accompagnement de ce programme alimentaire européen, la Ville d’Ebolowa abrite du 25 au 27 février 2025 un atelier multi-acteurs et multi-pays (Afrique du Sud, Ouganda, Cameroun) d’évaluation des lacunes de sa cartographie et de son système alimentaires aux fins d’en élaborer une politique publique urbaine, durable.",
      date: "26 Février 2025",
      image: IMAGE4,
      tags: ["Durabilité", "Développement"]
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
