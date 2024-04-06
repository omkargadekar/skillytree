"use client";
import React, { useState } from "react";

import styles from "./Launch.module.css";
import Image from "next/image";

const Launch = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <h2 className={styles.heading}>
            Upskill with A{" "}
            <span className={styles.headingspan}>Personal Touch !</span>
          </h2>
          <p className={styles.paragraph}>
            Video learning is boring because learning gets procrastinated 9{" "}
            <br /> out of 10 times. Guarantee yourself a skill in a time you
            decide,
            <br />
            connect to a live tutor now!
          </p>
        </div>
        <button className={styles.button}>
          Book a Trial <img src="/arrow-right.png" alt="" />
        </button>
        <div className={styles.launchdots}>
          {[0, 1, 2].map((_, index) => (
            <span
              key={index}
              className={`${styles.dots} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src="/launch.png"
          alt="Surprised Happy Girl with peach colored hooodie"
          className={styles.launchimage}
          width={800}
          height={704}
        />
        <div className={styles.imageContentsDiv}>
          <div className={styles.congrats}>
            <img
              className={styles.congratsImg}
              src="/mail.png"
              alt="Mail Icon"
            />
            <div className={styles.congratsDiv}>
              <h3 className={styles.congratsHeading3}>CONGRATS!</h3>
              <h5 className={styles.congratsHeading5}>FOR YOUR NEW SKILL</h5>
            </div>
          </div>
          <div className={styles.tutorsDiv}>
            <img
              className={styles.tutorsDivImg}
              src="/users.png"
              alt="Multiple Users Icon"
            />
            <div>
              <h3 className={styles.tutorsDivHeading3}>100+</h3>
              <h5 className={styles.tutorsDivHeading5}>TUTOR</h5>
            </div>
          </div>
          <div className={styles.studentsDiv}>
            <h3 className={styles.studentsDivHeading}>10K+ STUDENTS</h3>
            <img
              className={styles.studentsDivImg}
              src="/user.png"
              alt="Single User Icon"
            />
          </div>
          <div className={styles.cookingClass}>
            <img className={styles.cookingClassImg} src="/Ellipse.png" alt="" />
            <div>
              <h3 className={styles.cookingClassH3}>
                COOKING <span className={styles.cookingClassSpan}>CLASS</span>
              </h3>
              <h5 className={styles.cookingClassH5}>
                tOMORROW AT{" "}
                <span className={styles.cookingClassSpan}>10:00AM</span>
              </h5>
              <button className={styles.cookingClassBtn}>JOIN NOW</button>
            </div>
            <img
              src="/launchfog.png"
              alt="background fog effect in the bottom-right corner"
              className={styles.cookingClassFog}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launch;
