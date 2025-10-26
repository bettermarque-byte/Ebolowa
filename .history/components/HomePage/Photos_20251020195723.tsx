"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/doctor.jpg";
import IMAGE2 from "../../public/images/cocoa.jpg";
import IMAGE3 from "../../public/images/farming.jpg";
import IMAGE4 from "../../public/images/mayor.jpg";
import IMAGE5 from "../../public/images/medicine.jpg";
import Image from "next/image";
import Plus from "@/utils/icons/Plus";
import RoundedButton from "../ReUsables/RoundedButton";
import styles from "../../styles/HomePage/photos.module.scss";

const Photos = () => {
  //Translations
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);

  const photoImages = [
    {
      name: "Monument du Soldat Inconnu",
      image: IMAGE,
    },
    {
      name: "Monument 2 du Soldat Inconnu",
      image: IMAGE2,
    },
    {
      name: "Monument 3 du Soldat Inconnu",
      image: IMAGE3,
    },
    {
      name: "Monument 4 du Soldat Inconnu",
      image: IMAGE4,
    },
    {
      name: "Monument 5 du Soldat Inconnu",
      image: IMAGE5,
    },
  ];
  return (
    <div className={`section ${styles.photos__section}`}>
      <div className={`container ${styles.photos__container}`}>
        <h2 className={styles.photos__h2}>{t("HomePage:vivez")}</h2>
        <div className={styles.photos__content}>
          <div className={styles.pc__top}>
            <div className={styles.pc__left}>
              {photoImages.map((data, i) => (
                <div
                  className={`${styles.pc__image} ${
                    activeSlide === i ? styles.active__pc : ""
                  }`}
                  key={i}
                >
                  <Image quality={100} fill alt={data.name} src={data.image} />
                </div>
              ))}
              <div className={styles.pct__content}>
                <h3 className={styles.pc__h3}>
                  {photoImages[activeSlide].name}
                </h3>
                <div className={styles.pc__svg}>
                  <Plus />
                </div>
              </div>
            </div>
            <div className={styles.pc__right}>
              {photoImages.map((data, i) => (
                <div
                  className={`${styles.pc__image2} ${
                    activeSlide === i ? styles.active__pc2 : ""
                  }`}
                  key={i}
                  onClick={() => setActiveSlide(i)}
                >
                  <Image quality={100} fill alt={data.name} src={data.image} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.pc__bottom}>
            <RoundedButton
              text="Parcourir la galerie"
              textTransform="initial"
              fontSize="var(--normal-fontt-size)"
              fontFamily="var(--medium-font)"
              border="1px solid transparent"
              borderHover="1px solid var(--green)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
