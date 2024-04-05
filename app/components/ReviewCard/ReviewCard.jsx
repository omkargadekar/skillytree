import styles from "./ReviewCard.module.css";

const ReviewCard = () => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.decorationCircle}></div>
      <div className={styles.decorationCircle}></div>
      <div className={styles.customerInfo}>
        <img
          src="/profile-picture.jpg"
          alt="Profile Picture"
          className={styles.profilePicture}
        />
        <div>
          <h3 className={styles.customerName}>Andrew Holt</h3>
          <p className={styles.customerEmail}>Graphics123@Gmail.Com</p>
        </div>
      </div>
      <p className={styles.reviewText}>
        I Had Been Dreaming To Learn Guitar For 4 Yrs. One Day I Visited
        Peppertree.Com. I Clicked "Buy A Trial Session". Later All Happened
        Automatically. I Kept Attending The Amazing Tutor Online And She Kept Me
        Motivated. It's Been 4 Weeks & 40 Sessions. And Woohoo! I Just Surprised
        All My Friends At A Party With My Skills! Stop Desiring A Skill, Just
        Start With Peppertree!
      </p>
    </div>
  );
};

export default ReviewCard;
