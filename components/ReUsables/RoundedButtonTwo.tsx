import React from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/roundedbutton.module.scss"

const RoundedButtonTwo = ({text, textTransform, fontSize, fontFamily}: {text: string, textTransform: React.CSSProperties["textTransform"], fontSize: string, fontFamily: string}) => {
  return (
    <Link href="/" className={styles.rounded2}>
      <span style={{textTransform: textTransform, fontSize, fontFamily}}>{text}</span>
    </Link>
  )
}

export default RoundedButtonTwo