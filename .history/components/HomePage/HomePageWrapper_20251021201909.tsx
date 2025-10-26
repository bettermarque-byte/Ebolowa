"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Navigation/Navbar";
import HeroSection from "./HeroSection";
import Editorial from "./Editorial";
import News from "./News";
import Chiffres from "./Chiffres";
import Interest from "./Interest";
import Services from "./Services";
import Photos from "./Photos";
import Lenis from "lenis";
import Footer from "../Navigation/Footer";
import Team from "./Team";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import Schneider from "../ReUsables/Schneider";

const BackgroundSlideshow = dynamic(() => import("./BackgroundSlideshow"), {
  ssr: false,
  // loading: () => <p>Loading...</p>,
});

const HomePageWrapper = () => {
  //Smooth Scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.1,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [activeNeider, setActiveNeider] = useState(false);

  return (
    <>
      <Navbar />
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
      <Footer activeNeider={activeNeider} setActiveNeider={setActiveNeider} />
    </>
  );
};

export default HomePageWrapper;
