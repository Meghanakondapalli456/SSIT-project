import React from 'react'
import Head from '../Header/Head'
import styles from './ABoutus.module.css'

const ABoutus = () => {
  const data =[
    {
      image:"/meet1.png",
      type:"Lorem Ipsum is simply dummy text of the printing and typesetting ",
      info:"(CEO) K.A Rishman fernando"
    },

    {
      image:"/meet2.png",
      type:"Lorem Ipsum is simply dummy text of the printing and typesetting ",
      info:"(EGO) keeith  perera"
    },

    {
      image:"/meet3.png",
      type:"Lorem Ipsum is simply dummy text of the printing and typesetting ",
      info:"(CTO) Krishnan gopal"
    },
  ]
  return (
    <div>
        <Head />
        <div className={styles.aboutus}>
            <p className={styles.heading}>Who <span className={styles.color}>we are....</span></p>
            <p className={styles.para}>At AFQ Tech, we believe in a systematic approach for any project be it complex or simple. We are a group of individuals with a various set of skill set varies from Digital Marketing to IoT/Robotics solutions. We have our dedicated team for your project which uses various methods such as agile Scrum & agile Kanban. We ensure top-notch quality, on-time delivery, and agility for your project.</p>
          <div className={styles.graphic}>
            <div className={styles.dot1}></div>
            <div className={styles.dot2}></div>
            <div className={styles.dot3}></div>
            <div className={styles.dot4}></div>
            <div className={styles.dot5}></div>
            <div className={styles.triangle1}></div>
            <div className={styles.triangle2}></div>
           <img  src="/Bill Sitting.png" className={styles.bill}/>
           </div>
        </div>
        <div className={styles.group}>
          <p className={styles.meet}>Meet Our Team</p>
        </div>
        <div className={styles.meeting}>
        {data.map((item,index)=>{
          return <div key={index}>
            <img src={item.image}/>
            <p className={styles.type}>{item.type}</p>
            <p className={styles.info}>{item.info}</p>
            </div>
        })}
        </div>
    </div>
  )
}

export default ABoutus