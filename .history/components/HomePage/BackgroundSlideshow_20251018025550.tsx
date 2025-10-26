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

import React, { useMemo, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/HomePage/backgroundslide.module.scss";

type Img = {
  src: StaticImageData | string;
  alt?: string;
};

export default function BackgroundSlideshow({
  images,
  slot = 6,
  scale = 1.1,
  overlap, // optional seconds; if omitted we use 20% of slot
}: {
  images: Img[];
  slot?: number;
  scale?: number;
  overlap: number;
}) {
  if (!images || images.length === 0) return null;

  const n = images.length;
  const total = n * slot;

  // default overlap = 20% of slot seconds, limited to < slot
  const overlapSec = typeof overlap === "number" ? Math.min(overlap, slot * 0.9) : Math.min(slot * 0.2, slot * 0.9);

  // unique id so keyframes don't clash across multiple instances
  const uidRef = useRef("bgsl_" + Math.random().toString(36).slice(2, 9));
  const animName = `bgZoomFade_${uidRef.current}`;

  // active window is slot + overlap (seconds)
  // convert to percentage of the full total animation
  const activePercent = ((slot + overlapSec) / total) * 100; // e.g. for n=3, slot=6 => total=18, active=(6+1.2)/18*100
  const fadeInEnd = Math.max(0.5, activePercent * 0.12); // quick fade in (as % of full animation)
  const scaleEnd = Math.max(fadeInEnd + 0.5, activePercent * 0.85); // where scaling ends (still in active window)

  // Build dynamic keyframes CSS once
  const dynamicCss = useMemo(() => {
    return `
      /* per-instance keyframes for ${animName} */
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
      {/* inject the per-instance keyframes */}
      <style>{dynamicCss}</style>

      {images.map((img, i) => {
        const delay = i * slot;
        // zIndex: first image on top initially so it fades to reveal the one below
        const zIndex = n - i;

        const slideStyle = {
          animationName: animName,
          animationDuration: `${total}s`,
          animationDelay: `${delay}s`,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
          animationFillMode: "both",
          ["--slide-scale" as any]: String(scale),
          zIndex,
        } as React.CSSProperties;

        return (
          <div key={i} className={styles.slide} style={slideStyle} aria-hidden={false}>
            <Image
              src={img.src}
              alt={img.alt ?? `background-${i + 1}`}
              fill
              sizes="100vw"
              className={styles.img}
              priority={i === 0}
            />
          </div>
        );
      })}
    </div>
  );
}


