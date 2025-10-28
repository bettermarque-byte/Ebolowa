"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import styles from "../styles/Navigation/languageselector.module.scss";
import { Angle } from "./icons/Angle";

export default function LanguageSelector({
  setLocalState,
}: {
  setLocalState: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const currentPathname = usePathname();

  const [activeSelector, setActiveSelector] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  //Set Active selector to false when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveSelector(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  const handleChange = (newLocale: string) => {
    // //Managing Local State
    // setLocalState("Translating State");

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    let newPathname = currentPathname.replace(
      new RegExp(`^/(${["fr", "en"].join("|")})`),
      `/${newLocale}`
    );

    // router.push(newPathname);
    history.pushState(null, "", newPathname);

    // update i18next language so client strings rerender
    i18n.changeLanguage(newLocale);
  };

  return (
    <div
      className={styles.ls__container}
      ref={containerRef}
      onClick={() => setActiveSelector((v) => !v)}
    >
      <div
        className={`${styles.ls__wrapper} ${
          activeSelector ? styles.ls__active : ""
        }`}
      >
        <span className={`${styles.selected}`}>
          {currentLocale.toUpperCase()}
        </span>
        <Angle width="18px" stroke="white" />
      </div>
      <div
        className={`${styles.selector} ${
          activeSelector ? styles.active__selector : ""
        }`}
      >
        <div
          className={`${styles.s__item} ${
            currentLocale === "en" ? styles.active__select : ""
          }`}
          onClick={() => {
            handleChange("en");
          }}
        >
          <span>EN</span>
        </div>
        <div
          className={`${styles.s__item} ${styles.s__item2} ${
            currentLocale === "fr" ? styles.active__select : ""
          }`}
          onClick={() => {
            handleChange("fr");
          }}
        >
          <span>FR</span>
        </div>
      </div>
    </div>
  );
}
