import React from 'react'
import styles from './Upcomingwebinar.module.css'
import Upcoming from './Upcoming'

const Upcomingwebinar = () => {
    const points=[
        {    pic:"/priya.png",
             name:"Priya Punia",
            ceo:"CEO at Cart",
            guide:"How to become a Data Scientist",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            dte:"30th Aprl",
            tim:"10.00 AM IST",
 },

 {  pic:"/rahul.png",
    name:"Rahul ",
    ceo:"CEO at CEO at Filmo",
    guide:"How to become a VR/AR Specialist",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    dte:"14th Mar",
    tim:"10.00 AM IST",
},

{  pic:"/william.png",
    name:"William michell",
    ceo:"CEO at Millow",
    guide:"How to become an expert in AI/ML",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    dte:"19th JUL",
    tim:"10.00 AM IST",
}
]
  return (
    <div className={styles.Upcomingwebinar}>
        <div className={styles.heading}>Upcoming Webinars</div>
        {points.map((item, index) =>{
            return <Upcoming  key={`upcoming-${index}`}{...item}/>
        })}
       
    </div>
    
  )
}

export default Upcomingwebinar