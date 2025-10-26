import React from "react";
import Link from "next/link";
import Facebook from "@/utils/icons/Facebook";
import Twitter from "@/utils/icons/Twitter";
import Instagram from "@/utils/icons/Instagram";
import styles from "../../styles/Navigation/footer.module.scss";

const Footer = () => {
  const firstLinks = [
    {
      name: "contact@ebolowa.net",
      link: "mailto:contact@ebolowa.net",
    },
    {
      name: "(+237) 656-908-382",
      link: "tel:+237656908382",
    },
    {
      name: "B.P 108 Ebolowa, Angalé",
    },
  ];

  const secondLinks = [
    {
      icon: Facebook,
      link: "/"
    },
    {
      icon: Twitter,
      link: "/"
    },
    {
      icon: Instagram,
      link: "/"
    }
  ]

  return (
    <footer className={styles.footer__section}>
      <div className={styles.fs__top}>
        <div className={`container ${styles.fs__container}`}>
          <div className={styles.fsc__left}>
            <div className={styles.fsl__top}>
              <span className={styles.fs__span}>Coordonnés</span>
              <div className={styles.first__links}>
                {firstLinks.map((data, i) => {
                  if (data.link) {
                    return (
                      <Link key={i} href={data.link}>
                        {data.name}
                      </Link>
                    );
                  } else {
                    return <span key={i}>{data.name}</span>
                  }
                })}
              </div>
            </div>
            <div className={styles.fsl__bottom}>
            <span className={styles.fs__span}>SUIVEZ NOUS SUR</span>
            <div className={styles.second__links}>
              {
                secondLinks.map((data, i) => {
                  const Icon = data.icon;
                  return (
                    <Link l>
                    
                    </Link>
                  )
                })
              }
            </div>
            </div>
          </div>
          <div className={styles.fsc__right}></div>
        </div>
      </div>
      <div className={styles.fs__bottom}></div>
    </footer>
  );
};

export default Footer;
