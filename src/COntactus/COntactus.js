import React from 'react'
import Head from '../Header/Head'
import styles from './COntactus.module.css'
import Keyword from "../Keyword/Keyword";

const COntactus = () => {
  return (
    <div>
        <Head />
        <div className={styles.wrapper}>
        <div className={styles.details}>
        <p className={styles.heading}>Contact <span className={styles.color}>Us</span></p>
        <p className={styles.name}>Your Name</p>
        <div className={styles.box}>Write your name</div>
        <p className={styles.mail}>Your Email</p>
        <div className={styles.gmail}>Sample@gmail.com</div>
        <p className={styles.message}>Message</p>
        <div className={styles.here}>Write here...........</div>
        <button className={styles.send}>Send &rarr;</button>
        </div>
        <div className={styles.details}>
            <img src="/meeting image.png" />
            <img src='/blur image.png' className={styles.blur}/>
            <div className={styles.info}>
                <div className={styles.redball}>
                <img src='/redball.png' className={styles.ball}/>
                </div>
                <div className={styles.address}>
                  <p className={styles.adrs}>Address</p>
                  <p className={styles.place}>No 7, Katherine Place, Melbourne 3000,
                  VIC Australia</p>
                
                  </div>
                </div>
        </div>
       
      </div>
      <hr />
      <p className={styles.num}>+61 420 992 332</p>
      <p className={styles.com}>info@afq.com.au</p>
      <p className={styles.www}>www.afqtech.com.au</p>
        <Keyword  className={styles.keyword}/>
        <div>
          <img src="/success.png"  className={styles.success}/>
          <div className={styles.card}>
            <img src="/right.png" className={styles.right} />
            <p className={styles.green}>Success</p>
            <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
            <button className={styles.continue}>continue</button>
          </div>
        </div>

        <div>
          <img src="/success.png"  className={styles.success1}/>
          <div className={styles.cards}>
            <img src="/wrong.png" className={styles.wrong} />
            <p className={styles.red}>Error</p>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
            <button className={styles.try}>Try Again</button>
          </div>
        </div>
    </div> 
  )
}

export default COntactus