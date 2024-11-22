import React from "react";
import styles from "./Service.module.css";
import Keyword from "../Keyword/Keyword";

const Service = () => {
  const bigdata = [
    {
      picture: "/service img1.png",
      alt: "service1",
      title: "1. Big Data & Business Analytics",
      describe:
        "Data is your most valuable asset.But only if you make the most of it.AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.",
    },
    {
      picture: "/service img2.png",
      alt: "service2",
      title: "2. IoT/ AI/ Robotics",
      describe:
        "From automation to advanced analytics and seamless experiences, we can embed AI in business. We'll deliver new operating models and strategic intelligence for smart processes and data-driven decisions.What, Why and How?",
    },
    {
      picture: "/service img3.png",
      alt: "service3",
      title: "3. Game Development and AR/VR",
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu",
    },
    {
      picture: "/service img4.png",
      alt: "service4",
      title: "4. Web and Software Development",
      describe:
        "From automation to advanced analytics and seamless experiences, we can embed AI in business. We'll deliver new operating models and strategic intelligence for smart processes and data-driven decisions.What, Why and How?",
    },
    {
      picture: "/service img5.png",
      alt: "service5",
      title: "5. Mobile Application Development",
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu",
    },
    {
      picture: "/service img6.png",
      alt: "service6",
      title: "6. SEO",
      describe:
        "From automation to advanced analytics and seamless experiences, we can embed AI in business. We'll deliver new operating models and strategic intelligence for smart processes and data-driven decisions.What, Why and How?",
    },
    {
      picture: "/service img7.png",
      alt: "service7",
      title: "7. Digital Marketing",
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu",
    },
    {
      picture: "/service img8.png",
      alt: "service8",
      title: "8. Cyber Security",
      describe:
        "From automation to advanced analytics and seamless experiences, we can embed AI in business. We'll deliver new operating models and strategic intelligence for smart processes and data-driven decisions.What, Why and How?",
    },
  ];
  return (
    <div className={styles.Service}>
      <div className={styles.heading}>
        Our <span className={styles.color}>Services</span>
      </div>
      <div className={styles.servicecard}>
        {bigdata.map((data, index) => {
          return (
            <div key={index}>
              <img
                src={data.picture}
                alt={data.alt}
                className={styles.images}
              />
              <p className={styles.title}>{data.title}</p>
              <p className={styles.description}>{data.describe}</p>
            </div>
          );
        })}
      </div>
      <Keyword />
    </div>
  );
};

export default Service;
