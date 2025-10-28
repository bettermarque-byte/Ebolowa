import React from "react";

import styles from "../../styles/Navigation/translateloader.module.scss";

const TranslateLoader = () => {
  return (
    <div className={styles.translateloader}>
      <AnimatedPhrase
        phrase={t("Navigation:translating")}
        setAnimFinished={setAnimFinished}
      />
    </div>
  );
};

export default TranslateLoader;
