import React from "react";
import IMAGE from "../../public/images/mayor.jpg"
import Image from "next/image";
import styles from "../../styles/ReUsables/schneider.module.scss";

const Schneider = () => {
  return (
    <div className={styles.modal__section}>
      <div className={styles.modal__background}>

      </div>
      <div className={styles.modal__content}>
        <div className={`container ${styles.modal__container}`}>
          <div className={styles.modal__image}>
            <Image fill quality={100} placeholder="blur" src={IMAGE} alt="BAFRI Schneider - Creative Director at Better Marque Branding Agency"/>
          </div>
          <div className={styles.modal__left}>
            <div className={styles.ml__top}>
              <h3>BAFRI Schneider</h3>
              <span>Creative Director, Better Marque Branding</span>
              <p>
                With over 4 years in the design & development
              </p>
            </div>
            <div className={styles.ml__bottom}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schneider;
