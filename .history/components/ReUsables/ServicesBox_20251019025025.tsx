import React from "react";
import Documented from "@/utils/icons/Documented";
import RoundedButton from "./RoundedButton";
import styles from "../../styles/HomePage/services.module.scss";

interface ServiceItem {
  svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  link: string;
}

const ServicesBox = ({data}: {data: ServiceItem}) => {
  return (
    <div className={styles.serv__box}>
      <div className={styles.serv__svg}>
        {data.}
      </div>
      <h3 className={styles.serv__h3}>Démarches administratives</h3>
      <div className={styles.serv__button}>
        <RoundedButton
          text="En savoir plus"
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
