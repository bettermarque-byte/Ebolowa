import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/roundedbutton.module.scss";

const RoundedButton = ({
  text,
  textTransform,
  fontSize,
  fontFamily,
  border,
  borderHover,
  normal,
  link,
  target
}: {
  text: string;
  textTransform: React.CSSProperties["textTransform"];
  fontSize: string;
  fontFamily: string;
  border?: string;
  borderHover?: string;
  normal?: boolean;
  link?: string
  target?: string
}) => {
  if (normal) {
    return (
      <div
        className={styles.rounded}
        style={{
          ["--border" as any]: border,
          ["--borderhover" as any]: borderHover,
        }}
      >
        <span style={{ textTransform: textTransform, fontSize, fontFamily }}>
          {text}
        </span>
      </div>
    );
  } else
    return (
      <Link
        href={link ? link : "/"}
        className={styles.rounded}
        style={{
          ["--border" as any]: border,
          ["--borderhover" as any]: borderHover,
        }}
        ta
      >
        <span style={{ textTransform: textTransform, fontSize, fontFamily }}>
          {text}
        </span>
      </Link>
    );
};

export default RoundedButton;
