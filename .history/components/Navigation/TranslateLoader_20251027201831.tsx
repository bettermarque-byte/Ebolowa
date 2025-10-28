import React from "react";
import AnimatedPhrase from "@/utils/AnimatedPhrase";
import { sideBarAnim } from "@/animations";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Navigation/translateloader.module.scss";

const TranslateLoader = ({setAnimFinished}: {setAnimFinished: React.Dispatch<React.SetStateAction<boolean>>;}) => {
  const {t} = useTranslation();

  return (
    <motion.div className={styles.translateloader}>
      <AnimatedPhrase
        phrase={t("Navigation:translating")}
        setAnimFinished={setAnimFinished}
      />
    </motion.div>
  );
};

export default TranslateLoader;
