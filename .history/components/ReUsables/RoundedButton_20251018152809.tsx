import React, { CSSProperties } from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/roundedbutton.module.scss"

const RoundedButton = ({text, textTransform}: {text: string, textTransform: CSSProperties.}) => {
  return (
    <Link href="/" className={styles.rounded}>
      <span style={{textTransform: textTransform}}>{text}</span>
    </Link>
  )
}

export default RoundedButton