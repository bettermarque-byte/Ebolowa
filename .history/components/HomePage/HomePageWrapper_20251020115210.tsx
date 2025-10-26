

import React from 'react'
import Navbar from '../Navigation/Navbar'
import HeroSection from './HeroSection'
import Editorial from './Editorial'
import News from './News'
import Chiffres from './Chiffres'
import Interest from './Interest'
import Services from './Services'
import Photos from './Photos'
import Footer from '../Navigation/Footer'

const HomePageWrapper = () => {
    //Smooth Scroll
    useEffect(() => {
      const lenisInstance = new Lenis({
        duration: 1.25,
      });
  
      function raf(time: number) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
  
      // Store the lenis instance in state
      setLenis(lenisInstance);
    }, []);
  
  return (
    <>
    <Navbar />
    <HeroSection />
    <Editorial />
    <News/>
    <Chiffres />
    <Interest />
    <Services />
    <Photos />
    <Footer />
    </>
  )
}

export default HomePageWrapper