"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Navigation/Navbar";
import HeroSection from "./HeroSection";
import Editorial from "./Editorial";
import News from "./News";
import Chiffres from "./Chiffres";
import Interest from "./Interest";
import Photos from "./Photos";
import Lenis from "lenis";
import Footer from "../Navigation/Footer";
import TranslateLoader from "../Navigation/TranslateLoader";
import { AnimatePresence } from "framer-motion";
import Team from "./Team";
import Services from "./Services";
import Schneider from "../ReUsables/Schneider";


//Home Page Wrapper
const HomePageWrapper = () => {
  //Smooth Scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [activeNeider, setActiveNeider] = useState(false);

  //Translating State
  const [localState, setLocalState] = useState("Initial State");
  const [animFinished, setAnimFinished] = useState(false);

  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setLocalState("InitialState");
          setAnimFinished(false);
        }}
      >
        {localState === "Translating State" && !animFinished && (
          <TranslateLoader localState={localState} animFinished={animFinished} setAnimFinished={setAnimFinished} />
        )}
      </AnimatePresence>
      <Navbar setLocalState={setLocalState} />
      <HeroSection />
      <Editorial />
      <News />
      <Chiffres />
      <Photos />
      <Services />
      <Interest />
      <Team />
      <AnimatePresence mode="wait">
        {activeNeider && (
          <Schneider
            activeNeider={activeNeider}
            setActiveNeider={setActiveNeider}
          />
        )}
      </AnimatePresence>
      <Footer setActiveNeider={setActiveNeider} />
    </>
  );
};

export default HomePageWrapper;
