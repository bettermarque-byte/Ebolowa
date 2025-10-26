import React from "react";
import IMAGE from "../../public/images/mayor.jpg";
import Image from "next/image";
import RoundedButton from "./RoundedButton";
import Cancel from "@/utils/icons/Cancel";
import styles from "../../styles/ReUsables/schneider.module.scss";

interface NeiderProps {
  activeNeider: boolean;
  setActiveNeider: React.Re
}

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
                Industrial Robotics, which he obtained from the National Higher
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
          <div className={styles.cancel}>
            <Cancel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schneider;
