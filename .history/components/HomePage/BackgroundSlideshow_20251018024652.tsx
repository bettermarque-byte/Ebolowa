// import React from "react";
// import Image from "next/image";
// import { StaticImageData } from "next/image";
// import styles from "../../styles/HomePage/backgroundslide.module.scss";

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

"use client";

import React, { useRef, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/HomePage/backgroundslide.module.scss";

type Img = {
  src: StaticImageData | string;
  alt?: string;
};

export default function BackgroundSlideshow({
  images,
  slot,
  scale,
}: {
  images: Img[];
  slot?: number;
  scale?: number;
}) {
  if (!images || images.length === 0) return null;

  const n = images.length;
  const total = n * slot; // full cycle duration in seconds

  // unique id so multiple instances don't clash
  const uidRef = useRef("bgsl_" + Math.random().toString(36).slice(2, 9));
  const animName = `bgZoomFade_${uidRef.current}`;

  // compute percent windows (percentages relative to 0..100 of animation)
  const activePercent = 100 / n; // each slide occupies this portion of the animation
  const fadeInEnd = Math.max(0.5, activePercent * 0.12); // small fade-in
  const scaleEnd = Math.max(fadeInEnd + 0.5, activePercent * 0.85); // end of scaling within the active window

  // Build dynamic keyframes css once per instance
  const dynamicCss = useMemo(() => {
    return `
      /* instance-specific keyframes for ${animName} */
      @keyframes ${animName} {
        0% { opacity: 0; transform: scale(1); }

        ${fadeInEnd}% { opacity: 1; transform: scale(1); }

        ${Math.min(scaleEnd, activePercent - 0.01)}% { opacity: 1; transform: scale(var(--slide-scale, 1.2)); }

        ${activePercent}% { opacity: 0; transform: scale(var(--slide-scale, 1.2)); }

        100% { opacity: 0; transform: scale(var(--slide-scale, 1.2)); }
      }
    `;
  }, [animName, activePercent, fadeInEnd, scaleEnd]);

  return (
    <div className={styles.image__container} aria-hidden="false">
      {/* inject per-instance keyframes */}
      <style>{dynamicCss}</style>

      {images.map((img, i) => {
        const delay = i * slot;

        // zIndex so first image (i=0) is on top initially: highest z (n - i)
        const zIndex = n - i;

        // style object - cast to React.CSSProperties; custom property needs casting (TS)
        const slideStyle = {
          animationName: animName,
          animationDuration: `${total}s`,
          animationDelay: `${delay}s`,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
          // allow keyframes to apply their 0% style during the delay
          animationFillMode: "both",
          // custom property for the scale:
          ["--slide-scale" as any]: String(scale),
          zIndex,
        } as React.CSSProperties;

        return (
          <div
            key={i}
            className={styles.slide}
            style={slideStyle}
            aria-hidden={false}
          >
            <Image
              src={img.src}
              alt={img.alt ?? `background-${i + 1}`}
              fill
              sizes="100vw"
              className={styles.img}
              priority={i === 0} // optional: preload the first image for a clean first view
            />
          </div>
        );
      })}
    </div>
  );
}


