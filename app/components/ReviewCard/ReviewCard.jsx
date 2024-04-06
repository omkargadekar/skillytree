// ReviewCard.jsx
import styles from "./ReviewCard.module.css";
import Image from "next/image";

const ReviewCard = () => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewerInfo}>
        <Image
          width={112}
          height={112}
          src="/man.png"
          alt="Reviewer"
          className={styles.reviewerAvatar}
        />
        <div className={styles.reviewerDetails}>
          <h3 className={styles.reviewerName}>Andrew Holt</h3>
          <p className={styles.reviewerEmail}>Graphics123@gmail.com</p>
        </div>
      </div>
      <div className={styles.reviewContent}>
        <p className={styles.reviewText}>
          I Had Been Dreaming To Learn Guitar For 4 Yrs. One Day I Visited
          Peppertree.Com. I Clicked "Buy A Trial Session". Later All Happened
          Automatically, I Kept Attending The Amazing Tutor Online And She Kept
          Me Motivated. It's Been 4 Weeks & 40 Sessions, And Woohoo! I Just
          Surprised All My Friends At A Party With My Skills! Stop Desiring A
          Skill, Just Start With Peppertree!
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
