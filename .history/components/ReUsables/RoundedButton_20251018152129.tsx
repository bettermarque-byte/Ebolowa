import React from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/roundedbutton.module.scss"

const RoundedButton = ({text}: {text: string}) => {
  return (
    <Link href="/" className={styles.rounded}>
      <span style={{h}}>{text}</span>
    </Link>
  )
}

export default RoundedButton