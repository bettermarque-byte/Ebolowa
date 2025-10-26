import React, { CSSProperties } from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/roundedbutton.module.scss"

const RoundedButton = ({text, textTransform, fontSize, fontFamily}: {text: string, textTransform: React.CSSProperties["textTransform"], fontSize: string, font}) => {
  return (
    <Link href="/" className={styles.rounded}>
      <span style={{textTransform: textTransform, fontSize}}>{text}</span>
    </Link>
  )
}

export default RoundedButton