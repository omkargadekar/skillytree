"use client";
import React, { useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div style={{ height: "100vh", marginTop: "10rem", position: "relative" }}>
      <h2 className={styles.head}>
        REVIEWS FROM OUR <span className={styles.headspan}>CUSTOMERS</span>
      </h2>
      <ReviewCard />
      <p className={styles.circle}></p>
      <p className={styles.circle1}></p>
      <p className={styles.circle2}></p>
      <p className={styles.circle3}></p>
      <img className={styles.left} src="/right.png" alt="string left" />
      <img className={styles.right} src="/left.png" alt="string right" />
      <div className={styles.reviewdots}>
        {[0, 1, 2, 4].map((_, index) => (
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
  );
};

export default Reviews;
