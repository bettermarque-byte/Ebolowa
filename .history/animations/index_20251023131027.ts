import { Variants } from "framer-motion";

export const schneiderAnim: Variants = {
  initial: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  entry: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
};

export const backAnim: Variants = {
  initial: {
    opacity: 0,
    backdropFilter: "blur(0.5rem)",
  },
  entry: {
    opacity: 1,
    backdropFilter: "blur(0.5rem)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1], delay: 0.5 },
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0.5rem)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
};

export const sideBarAnim: Variants = {
  initial: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",
    opacity: 0,
  },
  entry: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },
};