import React from "react";
import IMAGE from "../../public/images/doctor.jpg";
import IMAGE2 from "../../public/images/cocoa.jpg";
import IMAGE3 from "../../public/images/farming.jpg";
import IMAGE4 from "../../public/images/mayor.jpg";
import IMAGE5 from "../../public/images/medicine.jpg";
import Image from "next/image";
import Plus from "@/utils/icons/Plus";
import styles from "../../styles/HomePage/photos.module.scss";

const Photos = () => {
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
        <h2 className={styles.photos__h2}>Vivez Ebolowa en Photos</h2>
        <div className={styles.photos__content}>
          <div className={styles.pc__top}>
            <div className={styles.pc__left}>
              {photoImages.map((data, i) => (
                <div className={styles.pc__image} key={i}>
                  <Image quality={100} fill alt={data.name} src={data.image} />
                </div>
              ))}
              <div className={styles.pct__content}>
                <h3 className={styles.pc__h3}>Monument du Soldat Inconnu</h3>
                <div className={styles.pc__svg}>
                  <Plus />
                </div>
              </div>
            </div>
            <div className={styles.pc__right}>
              {
                
              }
              <div className={styles.pc__image2}>
                <Image quality={100} fill alt="Image" src={IMAGE} />
              </div>
            </div>
          </div>
          <div className={styles.pc__bottom}></div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
