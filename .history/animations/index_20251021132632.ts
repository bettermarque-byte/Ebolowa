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