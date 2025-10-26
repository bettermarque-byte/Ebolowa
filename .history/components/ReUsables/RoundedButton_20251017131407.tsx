import React from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/roundedbutton.module.scss"

const RoundedButton = () => {
  return (
    <Link href="/" className={styles.rounded}>
      <span></span>
    </Link>
  )
}

export default RoundedButton