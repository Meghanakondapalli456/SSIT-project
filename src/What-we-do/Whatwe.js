import React from "react";
import styles from "./Whatwe.module.css";
import Whatweicons from "./Whatweicons";

const Whatwe = () => {
  const arr = [
    {
      image: "/web.png",
      title: "Web Application",
      description:
        "Platform independant business solutions for maximum availability",
      bgcolor: "#FFF2F2",
    },

    {
      image: "/game.png",
      title: "Game Develepmet",
      description: "Interactive games with perfect graphics",
      bgcolor: "#FDFBDA",
    },

    {
      image: "/seo.png",
      title: "SEO ",
      description: "Let the world find you on top of others ",
      bgcolor: "#E2F3FF",
    },

    {
      image: "/iot.png",
      title: "Iot/ AI/ RObotic",
      description: "Advanced autonomous technologies to make life simple",
      bgcolor: "#FFE7FB",
    },

    {
      image: "/big data.png",
      title: "BIG Data",
      description: "Get your decision making backed by inteligent insight",
      bgcolor: "#F6EEE7",
    },

    {
      image: "/cyber.png",
      title: "Cyber Security",
      description: "Make your digital assets secure and protected",
      bgcolor: "#F1F1F1",
    },

    {
      image: "/mobile.png",
      title: "Mobile Applications",
      description: "The simplest but robust technology to accompany with you",
      bgcolor: "#F1E8FF",
    },

    {
      image: "/digital marketing.png",
      title: "Digital Marketing",
      description: "Business made easy in a digital world",
      bgcolor: "#E2FFF1",
    },
  ];
  return (
    <div className={styles.whatwewrapper}>
      <div className={styles.heading}>What we do</div>
      <div className={styles.icons}>
        {arr.map((value, index) => {
          return <Whatweicons key={"Whatweicons-${index}"} {...value} />;
        })}
      </div>
    </div>
  );
};

export default Whatwe;
