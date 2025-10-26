import React, { CSSProperties } from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/roundedbutton.module.scss"

const RoundedButton = ({text, textTransform, fontSize, fontFamily, border, borderHover}: {text: string, textTransform: React.CSSProperties["textTransform"], fontSize: string, fontFamily: string, border?: string, borderHover?:string}) => {
  return (
    <Link href="/" className={styles.rounded}>
      <span style={{textTransform: textTransform, fontSize, fontFamily, "--hover-color": border}}>{text}</span>
    </Link>
  )
}

export default RoundedButton