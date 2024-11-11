import React from "react";
import styles from "./Workshop.module.css";

const Workshop = ({ content }) => {
  return (
    <div>
       
      {content.map((item, index) => (
        <div key={index}>
          <h2>{item.head}</h2>
          <p>{item.description}</p>

        </div>
      ))}
      
    </div>
  );
};

export default Workshop;
