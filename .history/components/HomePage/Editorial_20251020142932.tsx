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
              {t("HomePage:editohead")}
              </p>
              <h3 className={styles.ero__h3}>{t("HomePage:mairemessage")}</h3>
            </div>
            <div className={styles.er__two}>
              <span className={styles.ert__span}>{t("HomePage:chers")},</span>
              <p className={styles.ert__p}>
              {t("HomePage:edito")}
              </p>
              <RoundedButton
                text={t("HomePage:liresuite")}
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
              {t("HomePage:position")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editorial;
