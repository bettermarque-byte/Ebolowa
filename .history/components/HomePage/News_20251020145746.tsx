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
      name: "Coopération, Ebolowa au laborium de L’AIMF en Suisse",
      text: "Parmi les 500 Maires, les représentants des capitales et métropoles d'une cinquantaine de pays ayant réétudié la coopération de ville à ville, à Lausanne (Suisse) du 22 au 24 mai 2024, se trouvait bien le Maire de la Ville d’Ebolowa.",
      date: "29 Mai 2024",
      image: IMAGE
    },
    {
      name: "Les appelés interpellent Ebolowa, en premier.",
      text: "Au cours de l’audience que le Maire de la Ville d’Ebolowa a accordé, ce 27 mars 2025, au Président du Conseil National des Appelés du Service Civique du Cameroun, la Communauté Urbaine d’Ebolowa a été choisie comme institution pilote de la campagne de vulgarisation des symboles et emblèmes nationaux du Cameroun, à l’échelle régionale.",
      date: "27 Mars 2025",
      image: IMAGE3
    },
    {
      name: "Le centre emplisseur de gaz d'Ebolowa demarre LE 04 AVRIL 2025 !",
      text: "Au cours de l’audience que le Maire de la Ville d’Ebolowa a accordé, ce 27 mars 2025, au Président du Conseil National des Appelés du Service Civique du Cameroun, la Communauté Urbaine d’Ebolowa a été choisie comme institution pilote de la campagne de vulgarisation des symboles et emblèmes nationaux du Cameroun, à l’échelle régionale.",
      date: "27 Mars 2025",
      image: IMAGE3
    },
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
