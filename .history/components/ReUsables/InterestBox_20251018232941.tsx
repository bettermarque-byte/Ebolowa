import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import IMAGE from "../../public/images/cocoa.jpg";
import styles from "../../styles/HomePage/interest.module.scss";

interfaceInt
const InterestBox = () => {
  return (
    <Link href="/" className={styles.interest}>
      <div className={styles.in__image}>
        <Image fill quality={100} src={IMAGE} alt="Content" />
      </div>
      <div className={styles.in__cta}>
        <span className={styles.in__span}>Attractions</span>
        <div className={styles.in__svg}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 3L12.885 5.13L21.255 13.5L3 13.5V16.5H21.255L12.885 24.885L15 27L27 15L15 3Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default InterestBox;
