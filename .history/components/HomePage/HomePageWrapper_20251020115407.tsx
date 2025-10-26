"use client";

import React, { useEffect } from "react";
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

  return (
    <>
      <Navbar />
      <HeroSection />
      <Editorial />
      <News />
      <Chiffres />
      <Interest />
      <Services />
      <Photos />
      <Footer />
    </>
  );
};

export default HomePageWrapper;
