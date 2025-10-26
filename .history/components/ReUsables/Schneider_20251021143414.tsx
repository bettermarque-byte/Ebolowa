"use client";

import React from "react";
import IMAGE from "../../public/images/bafri.jpg";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { schneiderAnim, backAnim } from "@/animations";
import { motion } from "framer-motion";
import HighlightedText from "./HighlighedText";
import RoundedButton from "./RoundedButton";
import Cancel from "@/utils/icons/Cancel";
import styles from "../../styles/ReUsables/schneider.module.scss";

const Schneider = ({
  activeNeider,
  setActiveNeider,
}: {
  activeNeider: boolean;
  setActiveNeider: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //Translations
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      variants={schneiderAnim}
      animate={activeNeider ? "entry" : "initial"}
      exit="exit"
      className={styles.modal__section}
    >
      <motion.div
        variants={backAnim}
        animate={activeNeider ? "entry" : "initial"}
        exit="exit"
        className={styles.modal__background}
      ></motion.div>
      <div className={styles.modal__content}>
        <div className={`container ${styles.modal__container}`}>
          <div className={styles.modal__image}>
            <Image
              fill
              quality={100}
              placeholder="blur"
              src={IMAGE}
              priority
              alt="BAFRI Schneider - Creative Director at Better Marque Branding Agency"
            />
          </div>
          <div className={styles.modal__left}>
            <div className={styles.ml__top}>
              <h3>BAFRI Schneider</h3>
              <span>{t('Navigation:creative')}</span>
              <p>
                {t('Navigation:aboutsch')}
              </p>
            </div>
            <div className={styles.ml__bottom}>
              <div className={styles.cta}>
                <RoundedButton
                  border="1px solid transparent"
                  borderHover="1px solid var(--green)"
                  target="_blank"
                  link="https://wa.me/23793370638"
                  text="Whatsapp"
                  textTransform="initial"
                  fontSize="var(--normal-font-size)"
                  fontFamily="var(--medium-font)"
                />
              </div>
              <div className={styles.cta}>
                <RoundedButton
                  border="1px solid transparent"
                  borderHover="1px solid var(--green)"
                  target="_blank"
                  link="https://bettermarque.com/projects"
                  text="Portfolio"
                  textTransform="initial"
                  fontSize="var(--normal-font-size)"
                  fontFamily="var(--medium-font)"
                />
              </div>
            </div>
          </div>
          <div className={styles.cancel} onClick={() => setActiveNeider(false)}>
            <Cancel />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Schneider;
