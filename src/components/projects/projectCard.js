import React from "react";
import { IoIosRocket } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import styles from "./projects.module.css";

const ProjectCard = ({
  imageUrl,
  name,
  description,
  technologies,
  liveSite,
  gitHub,
}) => {
  return (
    <div className={styles.projectCard}>
      <div
        className={styles.projectImage}
        style={{backgroundImage: "url(" + imageUrl + ")"}}
      ></div>
      <div className={styles.projectHover}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.description}>{description}</p>
        <p className={styles.technologies}>{technologies}</p>
        <div className={styles.buttonContainer}>

          <div className={styles.button}>
            <a className={styles.buttonLink} href={liveSite} target="_blank" rel="noopener noreferrer">
              <IoIosRocket />
              <p className={styles.buttonLabel}> Live Site</p>
            </a>
          </div>

          <div className={styles.button}>
            <a className={styles.buttonLink} href={gitHub} target="_blank" rel="noopener noreferrer">
              <FaGithub />
              <p className={styles.buttonLabel}> GitHub</p>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
