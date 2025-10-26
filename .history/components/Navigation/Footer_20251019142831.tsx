import React from 'react'
import Link from 'next/link'
import styles from "../../styles/Navigation/footer.module.scss"

const Footer = () => {
  const firstLinks = [
    {
      name: "contact@ebolowa.net",
      link: "mailto:contact@ebolowa.net"
    },
    {
      name: "(+237) 656-908-382",
      link: "tel:+237656908382"
    },
    {
      name: "B.P 108 Ebolowa, Angalé"
    }
  ]
  return (
    <footer className={styles.footer__section}>
      <div className={styles.fs__top}>
        <div className={`container ${styles.fs__container}`}>
          <div className={styles.fsc__left}>
            <div className={styles.fsl__top}>
              <span className={styles.fs__span}>Coordonnés</span>
              <div className={styles.first__links}>
                {
                  firstLinks.map((data, i) => {
                    if (data.link) {

                      return (
                        <Link href={data.link}>{data.name}</Link>
                      )
                    } else {
                      return (
                        <span></span>
                      )
                    }
                  })
                }
              </div>
            </div>
            <div className={styles.fsl__bottom}>

            </div>
          </div>
          <div className={styles.fsc__right}>

          </div>
        </div>
      </div>
      <div className={styles.fs__bottom}>

      </div>
    </footer>
  )
}

export default Footer