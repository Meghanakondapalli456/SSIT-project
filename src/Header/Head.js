import React from 'react'
import styles from './Head.module.css';
import {Link} from 'react-router-dom';


const Head = () => {
  return (
    <div className={styles.heading}>
        <h1>LOGO</h1>
        <div className={styles.header}>
           <Link to ="/" ><h3>Home</h3>  </Link>
           <Link to="/about"> <h3>About us</h3></Link>
           <Link to ="/service" >  <h3>Services</h3></Link>
           < Link to ="/news" ><h3>News</h3></Link>
            <button >Contact us</button>
        </div>
    </div>
  )
}

export default Head