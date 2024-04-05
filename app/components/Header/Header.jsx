"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
// import { useRouter } from "next/router";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  // const router = useRouter();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    // router.push(`/${link}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/skilltree_logo.svg"
          alt="Skilltree Logo"
          width={218}
          height={50}
        />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <img
              className={styles.searchicon}
              src="/searchIcon.svg"
              alt="search"
            />
          </li>
          <li className={styles.navItem}>
            <a
              href="#"
              className={`${styles.navLink} ${
                activeLink === "home" ? styles.active : ""
              }`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#"
              className={`${styles.navLink} ${
                activeLink === "findTutors" ? styles.active : ""
              }`}
              onClick={() => handleLinkClick("findTutors")}
            >
              Find Tutors
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#"
              className={`${styles.navLink} ${
                activeLink === "howItWorks" ? styles.active : ""
              }`}
              onClick={() => handleLinkClick("howItWorks")}
            >
              How it Works
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.userActions}>
        <button className={styles.loginButton}>
          <img src="/log-in.svg" alt="" /> Log In
        </button>
        <button className={styles.joinButton}>Join as Tutor</button>
      </div>
    </header>
  );
};

export default Header;
