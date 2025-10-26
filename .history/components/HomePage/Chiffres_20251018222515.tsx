import React from "react";
import ChiffresWrapper from "../ReUsables/ChiffresWrapper";
import styles from "../../styles/HomePage/chiffres.module.scss";

const Chiffres = () => {
  const numberData = [
    {
      name: "Communes et Arrondissements",
      number: "2",
      text: "Deux entités administratives locales coordonnent les services et le développement local durable.",
    },
    {
      name: "Centre Touristique National",
      number: "1",
      text: "Un site labellisé attire visiteurs, valorise patrimoine naturel et dynamise l’économie locale.",
    },
    {
      name: "Équipe en Première Division",
      number: "1",
      text: "Le Football club Epervier d'Ebolowa est tout 1 er club de football du Sud.",
    },
    {
      name: "Superficie de la Ville",
      number: "56",
      text: "56 kilomètres carrés abritent quartiers, espaces verts et activités économiques locales variées.",
    },
    {
      name: "Densité de population",
      number: "2,679",
      text: "La densité atteint deux mille six cent soixante-dix-neuf habitants au kilomètre carré.",
    },
    {
      name: "Population totale estimée",
      number: 150000,
      text: "Une communauté de cent cinquante mille habitants, diverse, dynamique et en croissance.",
    },
  ];
  return (
    <div className={`section ${styles.chiffres__section}`}>
      <div className={`container ${styles.chiffres__container}`}>
        <h2 className={styles.chiff__h2}>Ebolowa en chiffres</h2>
        <div className={styles.chiff__content}>
          {numberData.map((data, i) => (
            <ChiffresWrapper data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chiffres;
