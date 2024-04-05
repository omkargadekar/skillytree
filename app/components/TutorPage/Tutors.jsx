import React from "react";

import styles from "./Tutors.module.css";
import Card from "../TutorCard/Card";

const TopTutors = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Top Tutors</h1>
      <div className={styles.cardsContainer}>
        <Card />
        <Card />
        <Card />
      </div>
      <img className={styles.fogg} src="/fogg.png" alt="background fog" />
      <img
        className={styles.tutorfogg}
        src="/fogg.png"
        alt="background fog top right"
      />
    </div>
  );
};

export default TopTutors;
