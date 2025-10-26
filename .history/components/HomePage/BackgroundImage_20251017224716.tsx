import React from "react";
import Image from "next/image";
import 
import styles from "./BackgroundSlideshow.module.scss";


export default function BackgroundSlideshow({
  images,
  slot = 5,
  scale = 1.2,
}: {images: }) {
  if (!images || images.length === 0) return null;

  const n = images.length;
  const total = n * slot;

  return (
    <div
      className={`${styles.container} ${className}`}
      style={style}
      aria-hidden="false"
    >
      {images.map((img, i) => {
        const delay = i * slot;
        // wrapper holds animation and css variables; Image uses fill to cover
        return (
          <div
            key={i}
            className={styles.slide}
            style={{
              // animation sequencing & duration:
              animationDuration: `${total}s`,
              animationDelay: `${delay}s`,
              // scale passed as css var (string)
              ["--slide-scale"]: String(scale),
              zIndex: i + 1,
            }}
            aria-hidden={false}
          >
            <Image
              src={img.src}
              alt={img.alt ?? `background-${i + 1}`}
              fill
              sizes="100vw"
              className={styles.img}
              // you can optionally add priority={i === 0} to preload the first image
            />
          </div>
        );
      })}

      {children ? <div className={styles.content}>{children}</div> : null}
    </div>
  );
}
