import React from 'react'
import IMAGE from "../../public/images/farming.jpg"
import IMAGE2 from "../../public/images/cocoa.jpg"
import IMAGE3 from "../../public/images/scape.jpg"
import IMAGE4 from "../../public/images/medicine.jpg"
import BackgroundSlideshow from './BackgroundSlideshow'
import styles from "../../styles/HomePage/herosection.module.scss"

const HeroSection = () => {
  const backgroundImages = [
    {
      src: IMAGE,
      alt: "Farming"
    },
    {
      src: IMAGE2,
      alt: "Farming"
    },
    {
      src: IMAGE,
      alt: "Farming"
    },
    {
      src: IMAGE2,
      alt: "Farming"
    }
  ]
  return (
    <div className={styles.hero__section}>
      <BackgroundSlideshow images={backgroundImages} slot={5} scale={1.2}/>
    </div>
  )
}

export default HeroSection