import React from "react";
import styles from "./Keyword.module.css";

const Keyword = () => {
  const lorem=[
    {name: "Lorem"},
  ];
  const reusedlorem =Array(8).fill({ name: "Lorem" });
  return (
    <div className={styles.wrapper}>
      <div className={styles.keywordsSection}>
        <div className={styles.header}>Key words</div>
        <div className={styles.keywordList}>
          {reusedlorem .map((item, index) => {
             return (<div key={index}> 
            <p>{item.name}</p>
            </div> );
          })}
        </div>
        <div className={styles.verticalline1}></div>
      </div>
      <div className={styles.searchbar}>
        <div className={styles.search}>
          <div>Lorem Ipsum is simply</div>
          <button className={styles.srchbtn}>
            <img src="/search.png" alt="search" className={styles.searching} />
          </button>
        </div>
        <div className={styles.search}>
          <div>Lorem Ipsum is simply</div>
          <div>Go to our official Announcements</div>
        </div>
      </div>
      <div className={styles.verticalline2}></div>
      
      <div className={styles.ipsum}>
        <div className={styles.requirement}>
          <div>Lorem Ipsum is simply dummy</div>
          <div>Go to DID requirements</div>
        </div>
        <div className={styles.knowledge}>
          <div>Lorem Ipsum is simply</div>
          <div>To the knowledgebase</div>
        </div>
      </div>
      <div className={styles.icons}>
        <img src="/Instagram.png" alt="insta" />
        <img src="/Dribbble.png" alt="dribble" />
        <img src="/Twitter.png" alt="twitter" />
        <img src="/Youtube.png" alt="youtube" />
      </div>
    </div>
  );
};

export default Keyword
