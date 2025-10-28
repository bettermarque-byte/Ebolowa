import React from "react";
import AnimatedPhrase from "@/utils/AnimatedPhrase";
import { loaderAnim } from "@/animations";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Navigation/translateloader.module.scss";

const TranslateLoader = ({
  setAnimFinished,
}: {
  setAnimFinished: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { t } = useTranslation();

  return (
    <motion.div className={styles.translateloader}>
      <div className={styles.content}>
        <AnimatedPhrase
          phrase={t("Navigation:translating")}
          setAnimFinished={setAnimFinished}
        />
      </div>
    </motion.div>
  );
};

export default TranslateLoader;
