import React, {useState, useEffect} from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import styles from "../../styles/HomePage/backgroundslide.module.scss";

// export default function BackgroundSlideshow({
//   images,
//   slot,
//   scale,
// }: {
//   images: {
//     src: StaticImageData;
//     alt: string;
//   }[];
//   slot: number;
//   scale: number;
// }) {
//   if (!images || images.length === 0) return null;

//   const n = images.length;
//   const total = n * slot;

//   return (
//     <div className={`${styles.image__container}`} aria-hidden="false">
//       {images.map((img, i) => {
//         const delay = i * slot;
//         // wrapper holds animation and css variables; Image uses fill to cover
//         return (
//           <div
//             key={i}
//             className={styles.slide}
//             style={{
//               // animation sequencing & duration:
//               animationDuration: `${total}s`,
//               animationDelay: `${delay}s`,
//               // scale passed as css var (string)
//               ["--slide-scale" as any]: String(scale),
//               zIndex: i + 1,
//             }}
//             aria-hidden={false}
//           >
//             <Image
//               src={img.src}
//               alt={img.alt ?? `background-${i + 1}`}
//               fill
//               // you can optionally add priority={i === 0} to preload the first image
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// ZoomSlider.jsx

export default function BackgroundSlideshow({ 
  images, 
  duration = 5000, // Duration for each image cycle (zoom + fade)
  className = "" 
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, duration);

    return () => clearInterval(timer);
  }, [images.length, duration]);

  return (
    <div className={`zoom-slider ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`zoom-slider__slide ${
            index === activeIndex ? 'zoom-slider__slide--active' : ''
          }`}
          style={{
            animationDuration: `${duration}ms`
          }}
        >
          <Image
            src={image.src}
            alt={image.alt || `Slide ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
}
