import React from "react";
import IMAGE from "../../public/images/mayor.jpg";
import Image from "next/image";
import RoundedButton from "./RoundedButton";
import styles from "../../styles/ReUsables/schneider.module.scss";

const Schneider = () => {
  return (
    <div className={styles.modal__section}>
      <div className={styles.modal__background}></div>
      <div className={styles.modal__content}>
        <div className={`container ${styles.modal__container}`}>
          <div className={styles.modal__image}>
            <Image
              fill
              quality={100}
              placeholder="blur"
              src={IMAGE}
              alt="BAFRI Schneider - Creative Director at Better Marque Branding Agency"
            />
          </div>
          <div className={styles.modal__left}>
            <div className={styles.ml__top}>
              <h3>BAFRI Schneider</h3>
              <span>Creative Director, Better Marque Branding</span>
              <p>
                With over 4 years in the design & development industry, Bafri
                runs the branding agency bettermarque.com. He holds a master's
                degree in Electrical Engineering with a specialisation in
                industrial robotics, which he obtained from the National Higher
                Polytechnic School of Douala in 2024. His passion for unique
                identities and their impact on the built environment has led him
                to deliver innovative solutions fueling meaningful change.
                Today, Bafri directs all agency projects with the objective of
                turning obstacles into opportunities for personal and business
                growth.
              </p>
            </div>
            <div className={styles.ml__bottom}>
              <div className={styles.cta}>
                <span>Send Bafri a message</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schneider;
