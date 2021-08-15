import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { IoPerson } from 'react-icons/io5';
import { IoIosApps } from 'react-icons/io';
import { FaMagic, FaScroll } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.avatar}>

      </div>
      <div className={styles.navLinks}>
        <NavHashLink className={styles.navLink} activeClassName={styles.navLinkActive} to="#aboutme"
          title="Hi, I'm Wilson.">
          <IoPerson/>
        </NavHashLink>
        <NavHashLink className={styles.navLink} activeClassName={styles.navLinkActive} to="#skills"
          title="Here are some things I can do.">
          <FaMagic/>
        </NavHashLink>
        <NavHashLink className={styles.navLink} activeClassName={styles.navLinkActive} to="#projects"
          title="Here's what I've built.">
          <IoIosApps/>
        </NavHashLink>
        <NavHashLink className={styles.navLink} activeClassName={styles.navLinkActive} to="#resume"
          title="Some quick details about me.">
          <FaScroll/>
        </NavHashLink>
        <NavHashLink className={styles.navLink} activeClassName={styles.navLinkActive} to="#contactme"
          title="Don't be afraid to reach out!">
          <AiOutlineMail/>
        </NavHashLink>
      </div>
    </div>
  );
};

export default NavBar;
