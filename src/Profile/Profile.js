import React from "react";
import Head from "../Header/Head";
import styles from "./Profile.module.css";
import Profilecard from "./Profilecard";
import Profileworkshop from "./Profileworkshop";
import Keyword from "../Keyword/Keyword";


const Profile = () => {
  const reviews = [
    {
      image: "/stars.png",
      alt: " symbol",
      mater: "4.2 Instructor rating",
    },
    {
      image: "/symbols.png",
      alt: " symbol",
      mater: "213142 Reviews",
    },
    {
      image: "/user.png",
      alt: " symbol",
      mater: "51,262 Students",
    },
    {
      image: "/play-circle.png",
      alt: " symbol",
      mater: "12 Courses",
    },
  ];
  const courseprofile = [
    {
      picture: "/robo.png",

      course: "AI/ML",
      language: "Machine Learning",
      author: "by Edvard Brown",
    },
    {
      picture: "/code.png",

      course: "DEVELOPMENT",
      language: "Frontend Development",
      author: "by jennifer",
    },
    {
      picture: "/stripes.png",

      course: "DATA",
      language: "Data Science",
      author: "by Narayan",
    },
    {
      picture: "/bluelight.png",

      course: "DATA",
      language: "Data Science",
      author: "by Narayan",
    },
  ]
  const workshops=[
    {
     picto:"/teaching.png", 
     imagination:"Not Humans its all about technology that what leads in the future..", 
     authors:"by Edvard Brown",
     playfill:"/play-fill.png",
     circle:"/right-circle-fill.png"
    },

    {
      picto:"/image.png", 
      imagination:"Gaming is the world of imagination where all the developers design their own world", 
      authors:"by Edvard Brown",
      playfill:"/play-fill.png",
      circle:"/right-circle-fill.png"
     },
  ]

  return (
    <div className={styles.wrapper}>
      <Head />
      <img src="/computer.png" alt="computer" className={styles.computer} />
      <img src="/roundpic.png" alt="roundpic" className={styles.roundpic} />
      <p>
        Ton<span className={styles.colouring}>y &nbsp;</span> Cler
        <span className={styles.colouring}>k</span>
      </p>
      <img src="/pentagon.png" alt="pentagon" className={styles.pentagon} />
      <h3>Cyber security</h3>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sed quis
        pharetra, nisl. A consectetur tristique non dictum faucibus ultrices
        eleifend ac. Urna pulvinar lacinia sed sed. Non donec gravida amet,
        donec purus porttitor sodales tortor. Donec pretium, gravida eu etiam
        ornare vel. Adipiscing sed viverra nisl adipiscing.
      </h4>
      <div className={styles.card}>
        {reviews.map((item, index) => {
          return (
            <div key={index} className={styles.imagemater}>
              <img src={item.image} alt={item.alt} className={styles.image} />
              <h5 className={styles.mater}>{item.mater}</h5>
            </div>
          );
        })}
      </div>
      <div className={styles.courses}>
        <h3>Courses</h3>
      </div>
      <div className={styles.cards}>
        {courseprofile.map((item, index) => {
          return <Profilecard key={`profile-${index}`} {...item} />;
        })}
      </div>
      <div className={styles.work}>
      <h3>Workshops</h3>
      </div>
      <div className={styles.workshop}>
         {workshops.map((item, index) => {
        return <Profileworkshop  key={`profileworkshop-${index}`}{...item}/>
      })}
      </div>
      <Keyword />
    </div>
  );
};

export default Profile;
