import React from 'react'
import Head from '../Header/Head'
import styles from './Latestnews.module.css'

const Latestnews = () => {
  return (
    <div>
        <Head />
        <h1>Latest news<span className={styles.latest} > &nbsp;Updates</span></h1>
        <h6>Lorem Ipsum is simply dummy text of the printing .</h6>
        <img src="/curves.png" className={styles.curves}/>
        <img src='/bell.png'className={styles.bell}/>
        <div className={styles.searching}>
        <img src='/search.png'  className={styles.search}/>
        <div className={styles.sea}>search</div>
        </div>
        <img  src="/curves.png" className={styles.curve }/>
        <img  src="/lightbulb.png" className={styles.lightbulb}/>
    </div>
  )
}

export default Latestnews