import React from 'react'
import Head from '../Header/Head'
import styles from './Latestnews.module.css'
import Latestnewscard from './Latestnewscard'


const Latestnews = () => {
  const printing=[
    {
      image:"/speach.png",
      text:"Lorem Ipsum is simply dummy text of the printing.",
      industry:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      picture:"/person.png",
      Name:"Name here",
      year:"20.12.2020"
    }
  ]
  const term =[
    {
       img:"/figure1.png",
       txt:"Lorem Ipsum is simply dummy text of the printing.",
       indus:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
       pic:"/people1.png",
       here:"Name here",
       date:"20.12.2020"
    },
    {
      img:"/figure2.png",
      txt:"Lorem Ipsum is simply dummy text of the printing.",
      indus:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      pic:"/people2.png",
      here:"Name here",
      date:"20.12.2020"
   },
   {
    img:"/figure3.png",
    txt:"Lorem Ipsum is simply dummy text of the printing.",
    indus:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
    pic:"/people3.png",
    here:"Name here",
    date:"20.12.2020"
 },
 {
  img:"/figure4.png",
  txt:"Lorem Ipsum is simply dummy text of the printing.",
  indus:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
  pic:"/people4.png",
  here:"Name here",
  date:"20.12.2020"
},
{
  img:"/figure5.png",
  txt:"Lorem Ipsum is simply dummy text of the printing.",
  indus:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
  pic:"/people5.png",
  here:"Name here",
  date:"20.12.2020"
},
{
  img:"/figure6.png",
  txt:"Lorem Ipsum is simply dummy text of the printing.",
  indus:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
  pic:"/people6.png",
  here:"Name here",
  date:"20.12.2020"
},
  ]
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
        <div className={styles.card}>
        {printing.map((item, index) =>{
          return <div key={index}  className={styles.card1}> 
          <div className={styles.card2}>
          <img src={item.image}/>
          </div>
          <div className={styles.cards}> 
          <p className={styles.text}>{item.text}</p>
          <p className={styles.industry}>{item.industry}</p>
          <div className={styles.information}>
            <div className={styles.picture}>
          <img src={item.picture}/>
          </div>
          <div className={styles.info}>
          <p className={styles.Name}>{item.Name}</p>
          <p className={styles.year}>{item.year}</p>
          </div>
          </div>
          </div>
          </div>
        })}
        </div>
        <div className={styles.newscard}>
        {term.map((item,index)=>{
          return  <Latestnewscard  key={`latestnewscard-${index}`} {...item}/>
        })}
        </div>
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
          
    </div>
  )
}

export default Latestnews