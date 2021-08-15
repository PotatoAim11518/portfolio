import React from "react";
import styles from "./homepage.module.css"

const Homepage = () => {
  return (
    <div className={styles.homepageWrapper}>
      <div className={`${styles.section} ${styles.about}`} id="aboutme">
      </div>
      <div className={`${styles.section} ${styles.skills}`} id="skills">
        <h1 className={styles.sectionLabel}>Skills</h1>
      </div>
      <div className={`${styles.section} ${styles.projects}`} id="projects">
        <h1 className={styles.sectionLabel}>Projects</h1>
      </div>
      <div className={`${styles.section} ${styles.resume}`} id="resume">
        <h1 className={styles.sectionLabel}>Résumé</h1>
      </div>
      <div className={`${styles.section} ${styles.contact}`} id="contactme">
        <h1 className={styles.sectionLabel}>Contact</h1>
      </div>
    </div>
  );
};

export default Homepage;
