import React from "react";
import styles from "./homepage.module.css"

const Homepage = () => {
  return (
    <div className={styles.homepageWrapper}>
      <div className={`${styles.section} ${styles.about}`} id="aboutme">
      </div>
      <div className={`${styles.section} ${styles.skills}`} id="skills">
        <h1>Skills</h1>
      </div>
      <div className={`${styles.section} ${styles.projects}`} id="projects">
        <h1>Projects</h1>
      </div>
      <div className={`${styles.section} ${styles.resume}`} id="resume">
        <h1>Resume</h1>
      </div>
      <div className={`${styles.section} ${styles.contact}`} id="contactme">
        <h1>Contact</h1>
      </div>
    </div>
  );
};

export default Homepage;
