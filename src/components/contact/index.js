import React from "react";
import styles from "./contact.module.css";
import { FaGithub, FaLinkedin, FaAngellist } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactInfo}>
        <h3 className={styles.contactRow}>
          <ImLocation /> San Francisco, CA 94102
        </h3>
        <h3 className={styles.contactRow}>
          <AiFillMail />
          <a
            className={styles.links}
            href="mailto:whuang3015@gmail.com?subject=Hi, I'm reaching out from your Portfolio!"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            whuang3015@gmail.com
          </a>
        </h3>
        <h3 className={styles.contactRow}>
          <MdPhoneIphone />
          <a className={styles.links} href="tel:9167693015">
            {" "}
            +1 916 769 3015
          </a>
        </h3>
      </div>
      <div className={styles.socialWrapper}>
        <a
          className={styles.socialButton}
          href="https://github.com/PotatoAim11518/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <p className={styles.buttonLabel}> GitHub</p>
        </a>
        <a
          className={styles.socialButton}
          href="https://www.linkedin.com/in/wilson-huang-39198039/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <p className={styles.buttonLabel}> LinkedIn</p>
        </a>
        <a
          className={styles.socialButton}
          href="https://angel.co/u/wilson-huang-15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaAngellist />
          <p className={styles.buttonLabel}> AngelList</p>
        </a>
      </div>
      <div>
        <p className={styles.copyright}>© WILSON HUANG</p>
      </div>
    </div>
  );
};

export default Contact;
