import React from "react";
import RoundedButton from "./RoundedButton";
import { useTranslation } from "react-i18next";
import styles from "../../styles/HomePage/services.module.scss";

interface ServiceItem {
  svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  link: string;
}

const ServicesBox = ({ data }: { data: ServiceItem }) => {
  const Icon = data.svg;
  //Translations
  const { t } = useTranslation();

  return (
    <div className={styles.serv__box}>
      <div className={styles.serv__svg}>
        <Icon />
      </div>
      <h3 className={styles.serv__h3}>{data.name}</h3>
      <div className={styles.serv__button}>
        <RoundedButton
          text={t("HomePage:her")}
          textTransform="initial"
          fontSize="var(--normal-font-size)"
          fontFamily="var(--medium-font)"
          border="1px solid transparent"
          borderHover="1px solid var(--green)"
        />
      </div>
    </div>
  );
};

export default ServicesBox;
