import React from "react";
import Link from "next/link";
import Facebook from "@/utils/icons/Facebook";
import Twitter from "@/utils/icons/Twitter";
import Instagram from "@/utils/icons/Instagram";
import styles from "../../styles/Navigation/footer.module.scss";
import FooterMarquee from "../ReUsables/FooterMarquee";

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
      link: "/",
    },
    {
      icon: Twitter,
      link: "/",
    },
    {
      icon: Instagram,
      link: "/",
    },
  ];

  const thirdFourth = [
    {
      name: "LIENS DIRECTS",
      links: [
        {
          name: "A propos de la ville",
          link: "/",
        },
        {
          name: "Edito du maire",
          link: "/",
        },
        {
          name: "Histoire",
          link: "/",
        },
        {
          name: "Démarches",
          link: "/",
        },
        {
          name: "Contact",
          link: "/",
        },
      ],
    },
    {
      name: "Appels d'urgence",
      links: [
        {
          name: "Police",
          link: "/",
        },
        {
          name: "Ambulance",
          link: "/",
        },
        {
          name: "Gendamerie",
          link: "/",
        },
        {
          name: "Corona Virus",
          link: "/",
        },
      ],
    },
  ];
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
                      <Link
                        key={i}
                        href={data.link}
                        className={styles.fl__link}
                      >
                        {data.name}
                      </Link>
                    );
                  } else {
                    return <span key={i}>{data.name}</span>;
                  }
                })}
              </div>
            </div>
            <div className={styles.fsl__bottom}>
              <span className={styles.fs__span}>SUIVEZ NOUS SUR</span>
              <div className={styles.second__links}>
                {secondLinks.map((data, i) => {
                  const Icon = data.icon;
                  return (
                    <Link key={i} href={data.link} className={styles.sl__link}>
                      <Icon />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.fsc__right}>
            {thirdFourth.map((data, i) => (
              <div className={styles.fsr__box} key={i}>
                <span className={styles.fs__span}>{data.name}</span>
                <div className={styles.fsb__bottom}>
                  {data.links.map((link, i) => (
                    <Link href={link.link} key={i}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.fs__bottom}>
        <div className={styles.fs__marquee}>

        <FooterMarquee />
        </div>
        <div className={styles.fs__last}>
          <span>Copyright © Communauté Urbaine d’Ebolowa</span>
          <span>Version 2025</span>
          <span>Siteweb par <Link href="https://wa.me" target="_blank">BAFRI Schneider</Link></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
