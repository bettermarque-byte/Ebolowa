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
import Schneider from "../ReUsables/Schneider";

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

  const [activeNeider, setActiveSchneider] = useState(false);

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
      <Schneider />
      <Footer activeNeider/>
    </>
  );
};

export default HomePageWrapper;
