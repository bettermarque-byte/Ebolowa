import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import CueLogo from "@/utils/icons/CueLogo";
import RoundedButton from "../ReUsables/RoundedButton";
import { Angle } from "@/utils/icons/Angle";
import styles from "../../styles/Navigation/sidebar.module.scss";

const SideBar = () => {
  //Translations
  const { t, i18n } = useTranslation();

  const modalOne = [
    {
      name: t("Navigation:ville"),
      links: [
        {
          name: t("Navigation:histoire"),
          link: "/",
        },
        {
          name: t("Navigation:visiter"),
          link: "/",
        },
        {
          name: t("Navigation:plan"),
          link: "/",
        },
        {
          name: t("Navigation:edito"),
          link: "/",
        },
        {
          name: t("Navigation:nouveaux"),
          link: "/",
        },
        {
          name: t("Navigation:cooperation"),
          link: "/",
        },
      ],
    },
    {
      name: t("Navigation:mairie"),
      links: [
        {
          name: t("Navigation:elus"),
          link: "/",
        },
        {
          name: t("Navigation:communes"),
          link: "/",
        },
        {
          name: "Commissions",
          link: "/",
        },
        {
          name: t("Navigation:annuaires"),
          link: "/",
        },
        {
          name: t("Navigation:brochures"),
          link: "/",
        },
        {
          name: t("Navigation:seance"),
          link: "/",
        },
      ],
    },
    {
      name: t("Navigation:vosdemarches"),
      links: [
        {
          name: t("Navigation:demarches"),
          link: "/",
        },
        {
          name: t("Navigation:location"),
          link: "/",
        },
        {
          name: t("Navigation:urbanisme"),
          link: "/",
        },
        {
          name: "Police",
          link: "/",
        },
        {
          name: t("Navigation:communaute"),
          link: "/",
        },
        {
          name: t("Navigation:commerces"),
          link: "/",
        },
      ],
    },
    {
      name: t("Navigation:sports"),
      links: [
        {
          name: "Infrastructures",
          link: "/",
        },
        {
          name: t("Navigation:scolaire"),
          link: "/",
        },
      ],
    },
    {
      name: t("Navigation:solidarite"),
      links: [
        {
          name: t("Navigation:enfance"),
          link: "/",
        },
        {
          name: t("Navigation:famille"),
          link: "/",
        },
        {
          name: "Seniors",
          link: "/",
        },
        {
          name: t("Navigation:handicapees"),
          link: "/",
        },
        {
          name: t("Navigation:annuairesAssoc"),
          link: "/",
        },
        {
          name: t("Navigation:loisirs"),
          link: "/",
        },
      ],
    },
    {
      name: t("Navigation:economique"),
      links: [
        {
          name: t("Navigation:equitable"),
          link: "/",
        },
        {
          name: t("Navigation:zones"),
          link: "/",
        },
        {
          name: t("Navigation:marches"),
          link: "/",
        },
        {
          name: t("Navigation:foires"),
          link: "/",
        },
        {
          name: t("Navigation:entreprises"),
          link: "/",
        },
        {
          name: t("Navigation:publiques"),
          link: "/",
        },
      ],
    },
    {
      name: t("Navigation:cultpatri"),
      links: [
        {
          name: t("Navigation:culturel"),
          link: "/",
        },
        {
          name: t("Navigation:theatre"),
          link: "/",
        },
        {
          name: "Monuments",
          link: "/",
        },
      ],
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sideback}></div>
      <div className={styles.sidenav}>
        <div className={styles.sn__top}>
          <div className={styles.svg__logo}>
            <CueLogo />
          </div>
          <div className={styles.close__button}>
            <span>Close</span>
          </div>
        </div>
        <div className={styles.sn__middle}>
          <RoundedButton/>
        </div>
        <div className={styles.sn__bottom}></div>
      </div>
    </div>
  );
};

export default SideBar;
