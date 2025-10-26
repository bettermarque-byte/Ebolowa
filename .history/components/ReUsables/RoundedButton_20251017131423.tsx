import React from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/roundedbutton.module.scss"

const RoundedButton = ({text}) => {
  return (
    <Link href="/" className={styles.rounded}>
      <span>C</span>
    </Link>
  )
}

export default RoundedButton