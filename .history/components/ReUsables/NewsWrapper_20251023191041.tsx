import React from "react";
import { useTranslation } from "react-i18next";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import RoundedButton from "./RoundedButton";
import styles from "../../styles/HomePage/news.module.scss";

interface DataInterface {
  name: string;
  text: string;
  date: string;
  image: StaticImageData;
  tags: string[];
}

const NewsWrapper = ({ data }: { data: DataInterface }) => {
  //Translations
  const { t } = useTranslation();

  return (
    <Link href="/" className={styles.news__wrapper}>
      <div className={styles.nw__left}>
        <div className={styles.nwl__one}>
          {data.tags.map((tag, i) => (
            <span key={i} className={styles.nwo__span}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.nwl__two}>
          <h3 className={styles.nwl__h3}>{data.name}</h3>
          <p className={styles.nwl__p}>{data.text}</p>
        </div>
        <div className={styles.nwl__three}>
          <RoundedButton
            text={t("HomePage:liresuite")}
            textTransform="initial"
            fontSize="var(--small-size)"
            fontFamily="var(--medium-font)"
            border="1px solid transparent"
            borderHover="1px solid var(--green)"
            normal={true}
          />
          <span className={styles.date}>{data.date}</span>
        </div>
      </div>
      <div className={styles.nw__right}>
        <Image
          quality={100}
          src={data.image}
          fill
          alt={data.name}
          placeholder="blur"
        />
      </div>
    </Link>
  );
};

export default NewsWrapper;
