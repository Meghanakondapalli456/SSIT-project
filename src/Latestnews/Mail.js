import React from 'react'
import styles from './Latestnews.module.css'

const Mail = () => {
  return (
    <div className={styles.loops}>
          <div  className={styles.spamloop}>
            <p className={styles.loop}>Stay in the loop</p>
            <p className={styles.spam}>Subscribe to receive the latest news and updates about TDA.
            We promise not to spam you! </p>
          </div>
          <div className={styles.mail}>
            <p className={styles.email}>Enter email address</p>
            <button className={styles.button}>Continue</button>
          </div>
           </div>
  )
}

export default Mail