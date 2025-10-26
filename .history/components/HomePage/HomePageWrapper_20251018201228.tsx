import React from 'react'
import Navbar from '../Navigation/Navbar'
import HeroSection from './HeroSection'
import Editorial from './Editorial'

const HomePageWrapper = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Editorial />
    <News/>
    </>
  )
}

export default HomePageWrapper