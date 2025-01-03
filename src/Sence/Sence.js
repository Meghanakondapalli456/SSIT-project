import React from 'react'
import Whatwe from '../What-we-do/Whatwe'
import Webinar from '../Webinars/Webinar'
import News from '../News/News'
import Keyword from '../Keyword/Keyword'
import { AboutUs } from "../Components/AboutUs/AboutUs";
import styles from './Sence.module.css'
import Head from "../Header/Head";

const Sence = () => {
  return (
    <div className={styles.wrapper}>
      <Head className={styles.Head} />
      <div className={styles.card}>
      <div className={styles.image}>
        <img  src='/ssit img.png' className={styles.ssitimg}/>
        <p className={styles.edu}>We Set, Educate, Nexus, Solve, and Emerge <span className={styles.sense}>SENSE </span>
        the technology.</p>
        <button className={styles.btn}>Get in Touch</button>
      </div>
        <AboutUs  className={styles.aboutus}/>
        < Whatwe />
        < Webinar />
        < News />
        <Keyword />
        </div>
    </div>
  )
}

export default Sence