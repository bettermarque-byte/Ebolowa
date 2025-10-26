import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import RoundedButton from "../ReUsables/RoundedButton";
import IMAGE from "../../public/images/mayor.jpg";
import styles from "../../styles/HomePage/editorial.module.scss";

const Editorial = () => {
  //Translations
  const { t, i18n } = useTranslation();

  return (
    <div className={`section ${styles.edito__section}`}>
      <div className={`container ${styles.edito__container}`}>
        <div className={styles.edito__wrapper}>
          <div className={styles.edito__left}>
            <Image fill quality={100} src={IMAGE} alt="Mayor of Ebolowa" />
          </div>
          <div className={styles.edito__right}>
            <div className={styles.er__one}>
              <p className={styles.ero__p}>
              {t("HomePage:bienvenue")}
              </p>
              <h3 className={styles.ero__h3}>Message du maire</h3>
            </div>
            <div className={styles.er__two}>
              <span className={styles.ert__span}>Chers internautes,</span>
              <p className={styles.ert__p}>
                C’est avec un immense plaisir que nous vous accueillons sur le
                tout premier site internet de la Ville d’Ebolowa, un site qui,
                nous l’espérons, saura répondre à vos nombreuses et pressantes
                attentes. Reflet du dynamisme de notre Ville, ce nouveau site
                est le fruit de plusieurs mois de collaboration active entre la
                nouvelle équipe municipale, la Cellule de la Communication de la
                Communauté Urbaine et les différents autres services communaux.
              </p>
              <RoundedButton
                text="Lire la suite"
                textTransform="initial"
                fontSize="var(--normal-fontt-size)"
                fontFamily="var(--medium-font)"
                border="1px solid transparent"
                borderHover="1px solid var(--green)"
              />
            </div>
            <div className={styles.er__three}>
              <span className={styles.ert__name}>EDJO'O Daniel</span>
              <span className={styles.ert__status}>
                Maire, depuis le 17 Mars 2020
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editorial;
