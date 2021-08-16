import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <h1 className={styles.aboutGreeting}>
        Hello, I'm <span className={styles.myName}>Wilson</span>,
      </h1>
      <h3 className={styles.whoAmI}>and I'm a full-stack software engineer.</h3>
      <br></br>
      <p className={styles.aboutText1}>
        Prior to web development, I worked in the mobile games industry as a Player Experience Specialist. There I developed my passion for problem solving, user-centric design, and teamwork.
      </p>
      <br></br>
      <p className={styles.aboutText2}>
        When I'm not coding, you can find me exercising my love for fishing, traveling, video games, and good food with friends.
      </p>
    </div>
  );
};

export default About;
