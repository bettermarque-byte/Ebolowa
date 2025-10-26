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
  normal
  
}: {
  text: string;
  textTransform: React.CSSProperties["textTransform"];
  fontSize: string;
  fontFamily: string;
  border?: string;
  borderHover?: string;
  normal?: boolean
}) => {
  return (
    {
      normal ? 
    }
    <Link
      href="/"
      className={styles.rounded}
      style={{
        ["--border" as any]: border,
        ["--borderhover" as any]: borderHover,
      }}
    >
      <span style={{ textTransform: textTransform, fontSize, fontFamily }}>
        {text}
      </span>
    </Link>
  );
};

export default RoundedButton;
