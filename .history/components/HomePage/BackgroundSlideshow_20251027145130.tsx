"use client";

import React, { useMemo, useId } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/HomePage/backgroundslide.module.scss";

type Img = {
  src: StaticImageData | string;
  alt?: string;
};

/**
 * Allow CSS custom properties (no any)
 */
type CSSVars = React.CSSProperties & { [key: `--${string}`]: string | number | undefined };

export default function BackgroundSlideshow({
  images,
  slot = 6,
  scale = 1.15,
  overlap,
}: {
  images: Img[];
  slot?: number;
  scale?: number;
  overlap?: number;
}) {
  // ---- hooks MUST be at top-level (always run) ----
  const reactId = useId();
  const safeId = useMemo(() => `bgsl_${reactId.replace(/[:.]/g, "_")}`, [reactId]);
  const animName = `bgZoomFade_${safeId}`;

  // --- compute derived values (safe defaults so no hook is conditional) ---
  const n = images?.length ?? 0;
  const total = Math.max(1, n * slot); // avoid division by zero

  const overlapSec =
    typeof overlap === "number" ? Math.min(overlap, slot * 0.9) : Math.min(slot * 0.2, slot * 0.9);

  const activePercent = ((slot + overlapSec) / total) * 100;
  const fadeInEnd = Math.max(0.5, activePercent * 0.12);
  const scaleEnd = Math.max(fadeInEnd + 0.5, activePercent * 0.85);

  // ---- build dynamic CSS string WITHOUT useMemo (not a hook) ----
  const dynamicCss = `
    /* per-instance keyframes for ${animName} */
    @keyframes ${animName} {
      0% { opacity: 0; transform: scale(1); }

      ${fadeInEnd}% { opacity: 1; transform: scale(1); }

      ${Math.min(scaleEnd, activePercent - 0.01)}% { opacity: 1; transform: scale(var(--slide-scale, 1.2)); }

      ${activePercent}% { opacity: 0; transform: scale(var(--slide-scale, 1.2)); }

      100% { opacity: 0; transform: scale(var(--slide-scale, 1.2)); }
    }
  `;

  // If there are no images, still all hooks ran above — now we can safely early return
  if (n === 0) return null;

  return (
    <div className={styles.image__container} aria-hidden="false">
      <style>{dynamicCss}</style>

      {images.map((img, i) => {
        const delay = i * slot;
        const zIndex = n - i;

        const slideStyle: CSSVars = {
          animationName: animName,
          animationDuration: `${total}s`,
          animationDelay: `${delay}s`,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
          animationFillMode: "both",
          zIndex,
          ["--slide-scale"]: String(scale),
        };

        return (
          <div key={i} className={styles.slide} style={slideStyle} aria-hidden={false}>
            <Image
              src={img.src}
              alt={img.alt ?? `background-${i + 1}`}
              fill
              sizes="100vw"
              className={styles.img}
              priority={i === 0}
              placeholder="blur"
            />
          </div>
        );
      })}
    </div>
  );
}

