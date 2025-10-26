import React from "react";
import IMAGE from "../../public/images/attraction.jpg";
import { useTranslation } from "react-i18next";
import IMAGE2 from "../../public/images/dish.jpg";
import IMAGE3 from "../../public/images/hotel.jpg";
import InterestBox from "../ReUsables/InterestBox";
import styles from "../../styles/HomePage/interest.module.scss";

const Interest = () => {
  //Translations
  const { t, i18n } = useTranslation();
  
  const interestData = [
    {
      name: "Attractions",
      image: IMAGE,
      link: "/",
    },
    {
      name: "Gastronomie",
      image: IMAGE2,
      link: "/",
    },
    {
      name: "Hébergement",
      image: IMAGE3,
      link: "/",
    },
  ];
  return (
    <div className={`section ${styles.interest__section}`}>
      <div className={`container ${styles.interest__container}`}>
        <h2 className={styles.interest__h2}>Nos Centres d'Intêrets</h2>
        <div className={styles.interest__content}>
          {interestData.map((data, i) => (
            <InterestBox key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interest;
