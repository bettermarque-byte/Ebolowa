import React from "react";
import { useTranslation } from "react-i18next";
import ChiffresWrapper from "../ReUsables/ChiffresWrapper";
import styles from "../../styles/HomePage/chiffres.module.scss";

const Chiffres = () => {
  //Translations
  const { t, i18n } = useTranslation();

  const numberData = [
    {
      name: t("HomePage:communes"),
      number: "2",
      text: t("HomePage:communes_text"),
    },
    {
      name: t("HomePage:tourisme"),
      number: "1",
      text: t("HomePage:tourisme_text"),
    },
    {
      name: t("HomePage:equipe"),
      number: "1",
      text: t("HomePage:equipe_text"),
    },
    {
      name: t("HomePage:superficie"),
      number: "56",
      text: t("HomePage:superficie_text"),
    },
    {
      name: t("HomePage:densite"),
      number: "2,679",
      text: t("HomePage:densite__text"),
    },
    {
      name: t("HomePage:population"),
      number: "150,000",
      text: "Une communauté de cent cinquante mille habitants, diverse, dynamique et en croissance.",
    },
  ];
  return (
    <div className={`section ${styles.chiffres__section}`}>
      <div className={`container ${styles.chiffres__container}`}>
        <h2 className={styles.chiff__h2}>Ebolowa en chiffres</h2>
        <div className={styles.chiff__content}>
          {numberData.map((data, i) => (
            <ChiffresWrapper data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chiffres;
