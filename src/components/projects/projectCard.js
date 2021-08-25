import React, { useState } from "react";
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
  const [hiddenInfo, setHiddenInfo] = useState(true);

  return (
    <div className={styles.projectCard}>
      <h1 className={styles.name}>{name}</h1>
      <div
        className={styles.projectHoverContainer}
        onMouseLeave={() => setHiddenInfo(true)}
      >
        <div
          className={styles.projectImage}
          onMouseOver={() => setHiddenInfo(false)}
          style={{ backgroundImage: "url(" + imageUrl + ")" }}
        ></div>
        <div className={styles.projectHover} hidden={hiddenInfo}>
          <p className={styles.description}>{description}</p>
          <p className={styles.technologies}>{technologies}</p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <a
            className={styles.buttonLink}
            href={liveSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosRocket />
            <p className={styles.buttonLabel}> Live Site</p>
          </a>
        </div>

        <div className={styles.button}>
          <a
            className={styles.buttonLink}
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <p className={styles.buttonLabel}> GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
