import React from "react";
import About from "../about";
import Contact from "../contact";
import Projects from "../projects";
import Resume from "../resume";
import Skills from "../skills";
import styles from "./homepage.module.css"

const Homepage = () => {
  return (
    <div className={styles.homepageWrapper}>
      <div className={`${styles.section} ${styles.about}`} id="aboutme">
        <About/>
      </div>
      <div className={`${styles.section} ${styles.skills}`} id="skills">
        <h1 className={styles.sectionLabel}>Skills</h1>
        <Skills/>
      </div>
      <div className={`${styles.section} ${styles.projects}`} id="projects">
        <h1 className={styles.sectionLabel}>Projects</h1>
        <Projects/>
      </div>
      <div className={`${styles.section} ${styles.resume}`} id="resume">
        <h1 className={styles.sectionLabel}>Résumé</h1>
        <Resume/>
      </div>
      <div className={`${styles.section} ${styles.contact}`} id="contactme">
        <h1 className={styles.sectionLabel}>Contact</h1>
        <Contact/>
      </div>
    </div>
  );
};

export default Homepage;
