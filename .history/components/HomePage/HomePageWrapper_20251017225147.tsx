import React from 'react'
import Navbar from '../Navigation/Navbar'
import BackgroundSlideshow from './BackgroundSlideshow'

const HomePageWrapper = () => {
  const backgroundImages = []
  return (
    <>
    <Navbar />
    <BackgroundSlideshow />
    </>
  )
}

export default HomePageWrapper