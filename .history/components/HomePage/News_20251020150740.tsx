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
      name: "Ebolowa au laborium de L’AIMF en Suisse",
      text: "Parmi les 500 Maires, les représentants des capitales et métropoles d'une cinquantaine de pays ayant réétudié la coopération de ville à ville, à Lausanne (Suisse) du 22 au 24 mai 2024, se trouvait bien le Maire de la Ville d’Ebolowa.",
      date: "29 Mai 2024",
      image: IMAGE,
      tags: [oopération, gouvernance"]
    },
    {
      name: "Les appelés interpellent Ebolowa, en premier.",
      text: "Au cours de l’audience que le Maire de la Ville d’Ebolowa a accordé, ce 27 mars 2025, au Président du Conseil National des Appelés du Service Civique du Cameroun, la Communauté Urbaine d’Ebolowa a été choisie comme institution pilote de la campagne de vulgarisation des symboles et emblèmes nationaux du Cameroun, à l’échelle régionale.",
      date: "27 Mars 2025",
      image: IMAGE3
    },
    {
      name: "Le centre emplisseur de gaz d'Ebolowa démarre le 04 Avril 2025.",
      text: "C’est ce qui ressort de la visite du site de Mvila-Yemin’sem (Arrondissement d’Ebolowa 1er), le 26 mars 2025, par le Directeur Général de la Caisse de Stabilisation des Prix des Hydrocarbures (CSPH) qu’accompagnaient le Préfet du Département de la Mvila, le Maire de la Ville d’Ebolowa et le Sous-Préfet de céans voire leurs collaborateurs respectifs.",
      date: "27 Mars 2025",
      image: IMAGE2
    },
    {
      name: "Politique Alimentaire Urbaine, le déclic de FoodClic!",
      text: "Sous l’accompagnement de ce programme alimentaire européen, la Ville d’Ebolowa abrite du 25 au 27 février 2025 un atelier multi-acteurs et multi-pays (Afrique du Sud, Ouganda, Cameroun) d’évaluation des lacunes de sa cartographie et de son système alimentaires aux fins d’en élaborer une politique publique urbaine, durable.",
      date: "26 Février 2025",
      image: IMAGE4
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
