import React from 'react'
import styles from './Whatulearn.module.css'
import Whatulearncard from './Whatulearncard';
import Upcomingwebinar from '../Upcomingwebinar/Upcomingwebinar';

const Whatulearn = () => {
  const data=[{
    img:"/Done.png",
    title:"How to turn your website more productive and useful?",
    description:"At AFQ Tech, we believe in a systematic approach for any project be it complex or simple. We are a group of individuals with a various set of skill set varies from Digita",
    color: "#d1b7f4",
  }
  ];
  const repeatdata= Array(8).fill(data[0])
  return (
    <div className={styles.whatulearn}>
       <div className={styles.icons}>
        <img src='/google.png' alt='google' />
        <img src='/microsoft.png' alt='microsoft' />
        <img src='/apple.png' alt='apple' />
        <img src='/ibm.png' alt='ibm' />
        <img src='/netflix.png' alt='netflix' />
        <img src='/tesla.png' alt='tesla' />
       </div>
       <div className={styles.header}>What you will learn this Webinar? </div>
       <div className={styles.des}>At AFQ Tech, we believe in a systematic approach for any project be it complex or simple. We are a group of individuals with a various set of skill set varies from Digital Marketing to IoT/Robotics solutions. We have our dedicated team for your project which uses various methods such as agile Scrum & agile Kanban. We e </div>
      <div className={styles.mater}>
      {repeatdata.map((item,index)=>{
        return <Whatulearncard  key={`whatulearn-${index} `}{...item} />
      })

      }
      </div>
      <button className={styles.button} >Yes! Save My Spot</button>
      <Upcomingwebinar />
    </div>
  )
}

export default Whatulearn