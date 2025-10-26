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
  target,
  background,
  backHover,
  color,
  colorHover
}: {
  text: string;
  textTransform: React.CSSProperties["textTransform"];
  fontSize: string;
  fontFamily: string;
  border?: string;
  borderHover?: string;
  normal?: boolean;
  link?: string;
  target?: string;
  background?: string,
  backHover?: string,
  color?: string,
  backHover?: string
}) => {
  const buttonStyle = {
    "--border": border,
    "--borderhover": borderHover,
    "--background": background,
    "--backhover": backHover,
  } as React.CSSProperties;

  const textStyle: React.CSSProperties = {
    textTransform,
    fontSize,
    fontFamily,
  };

  if (normal) {
    return (
      <div className={styles.rounded} style={buttonStyle}>
        <span style={textStyle}>{text}</span>
      </div>
    );
  }

  return (
    <Link
      href={link || "/"}
      className={styles.rounded}
      style={buttonStyle}
      target={target}
    >
      <span style={textStyle}>{text}</span>
    </Link>
  );
};

export default RoundedButton;
