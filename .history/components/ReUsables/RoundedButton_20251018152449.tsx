import React from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/roundedbutton.module.scss"

const RoundedButton = ({text, textTransform}: {text: string, textTransform: string}) => {
  return (
    <Link href="/" className={styles.rounded}>
      <span>{text}</span>
    </Link>
  )
}

export default RoundedButton