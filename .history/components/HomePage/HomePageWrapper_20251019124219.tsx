import React from 'react'
import Navbar from '../Navigation/Navbar'
import HeroSection from './HeroSection'
import Editorial from './Editorial'
import News from './News'
import Chiffres from './Chiffres'
import Interest from './Interest'
import Services from './Services'
import Photos from './Photos'

const HomePageWrapper = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Editorial />
    <News/>
    <Chiffres />
    <Interest />
    <Services />
    <Photos/>
    </>
  )
}

export default HomePageWrapper