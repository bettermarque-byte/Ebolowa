import React from 'react'
import Navbar from '../Navigation/Navbar'
import IMAGE from "../../public/images/farming.jpg"
import IMAGE2 from "../../public/images/cocoa.jpg"
import BackgroundSlideshow from './BackgroundSlideshow'

const HomePageWrapper = () => {
  const backgroundImages = [
    {
      src: IMAGE,
      alt: "Farming"
    },
    {
      src: IMAGE2,
      alt: "Farming"
    },
  ]
  return (
    <>
    <Navbar />
    <BackgroundSlideshow im/>
    </>
  )
}

export default HomePageWrapper