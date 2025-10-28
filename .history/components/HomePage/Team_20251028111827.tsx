"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/elected/one.jpg";
import IMAGE2 from "../../public/images/elected/two.jpg";
import IMAGE3 from "../../public/images/elected/three.jpg";
import IMAGE4 from "../../public/images/elected/four.jpg";
import IMAGE5 from "../../public/images/elected/five.jpg";
import IMAGE6 from "../../public/images/elected/six.jpg";
import IMAGE7 from "../../public/images/elected/seven.jpg";
import IMAGE8 from "../../public/images/elected/eight.jpg";
import IMAGE9 from "../../public/images/elected/nine.jpg";
import IMAGE10 from "../../public/images/elected/ten.jpg";
import IMAGE11 from "../../public/images/elected/eleven.jpg";
import IMAGE12 from "../../public/images/elected/twelve.jpg";
import IMAGE13 from "../../public/images/elected/thirteen.jpg";
import IMAGE14 from "../../public/images/elected/fourteen.jpg";
import IMAGE15 from "../../public/images/elected/fifteen.jpg";
import IMAGE16 from "../../public/images/elected/sixteen.jpg";
import IMAGE17 from "../../public/images/elected/seventeen.jpg";
import IMAGE18 from "../../public/images/elected/eighteen.jpg";
import IMAGE19 from "../../public/images/elected/nineteen.jpg";
import IMAGE20 from "../../public/images/elected/twenty.jpg";
import IMAGE21 from "../../public/images/elected/twentyone.jpg";
import IMAGE22 from "../../public/images/elected/twentytwo.jpg";
import TeamContent from "./TeamContent";
import styles from "../../styles/HomePage/team.module.scss";


const Team = () => {
  //Translations
  const { t } = useTranslation();

  const teamsData = [
    {
      name: "BITOUMOU Joel",
      position: t("HomePage:ebwa1"),
      image: IMAGE,
    },
    {
      name: "BENGONG André",
      position: t("HomePage:ebwa2"),
      image: IMAGE2,
    },
    {
      name: t("HomePage:adjoint1"),
      position: t("HomePage:adjoint1"),
      image: IMAGE3,
    },
    {
      name: t("HomePage:adjoint2"),
      position: t("HomePage:adjoint2"),
      image: IMAGE4,
    },
    {
      name: "AKOM Mvondo",
      position: t("HomePage:conseiller"),
      image: IMAGE5,
    },
    {
      name: "BOMBO Oumarou",
      position: t("HomePage:conseiller"),
      image: IMAGE6,
    },
    {
      name: "DALLE Louis",
      position: t("HomePage:conseiller"),
      image: IMAGE7,
    },
    {
      name: "EDI'I Charles",
      position: t("HomePage:conseiller"),
      image: IMAGE8,
    },
    {
      name: "EDJO'O Niki",
      position: t("HomePage:conseiller"),
      image: IMAGE9,
    },
    {
      name: "MEDJO Maxime",
      position: t("HomePage:conseiller"),
      image: IMAGE10,
    },
    {
      name: "MVONDO Blaise",
      position: t("HomePage:conseiller"),
      image: IMAGE11,
    },
    {
      name: "MVONDO ZE Gilbert",
      position: t("HomePage:conseiller"),
      image: IMAGE12,
    },
    {
      name: "NKOTTO Dénis",
      position: t("HomePage:conseiller"),
      image: IMAGE13,
    },
    {
      name: "NKOULOU Jean",
      position: t("HomePage:conseiller"),
      image: IMAGE14,
    },
    {
      name: "NOUKIMI André",
      position: t("HomePage:conseiller"),
      image: IMAGE15,
    },
    {
      name: "ASSAKO Thierry",
      position: t("HomePage:conseiller"),
      image: IMAGE16,
    },
    {
      name: "TASSI PONG",
      position: t("HomePage:conseiller"),
      image: IMAGE17,
    },
    {
      name: "ZIBI Florent",
      position: t("HomePage:conseiller"),
      image: IMAGE18,
    },
    {
      name: "FOE Bénédicte",
      position: t("HomePage:conseillere"),
      image: IMAGE19,
    },
    {
      name: "PADIMATOU Yaya",
      position: t("HomePage:conseillere"),
      image: IMAGE20,
    },
    {
      name: "MBILI Jean",
      position: t("HomePage:conseiller"),
      image: IMAGE21,
    },
    {
      name: "MVONDO Frank",
      position: t("HomePage:conseiller"),
      image: IMAGE22,
    },
  ];

  return (
    <div className={`section ${styles.team__section}`}>
      <div className={`container ${styles.team__container}`}>
        <h2 className={styles.team__h2}>{t("HomePage:leselus")}</h2>
        {/* <TeamContent teamsData={teamsData}/> */}
        <div className={styles.team__content2} style={{height: "440px"}}>
          <div className={styles.teamc__wrapper}>
            <div className={styles.content__wrapper} style={{aspectRatio: "10/13"}}>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
