// components/TutorCard.jsx
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.topTutor}>TOP TUTOR</span>
      </div>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src="/tutor-image.jpg" alt="Tutor" className={styles.image} />
        </div>
        <div className={styles.details}>
          <div className={styles.profileContainer}>
            <img
              src="/profile-picture.jpg"
              alt="Profile"
              className={styles.profilePicture}
            />
            <h2 className={styles.name}>Radhakishan J.</h2>
            <div className={styles.languages}>
              <span>🇬🇧</span>
              <span>English, Geography, +3</span>
            </div>
            <div className={styles.languages}>
              <span>🌐</span>
              <span>English (Native), Hindi (Conversational) +1</span>
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>3</span>
              <span className={styles.statLabel}>Active Students</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>43</span>
              <span className={styles.statLabel}>Session Finished</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>4.5</span>
              <span className={styles.statLabel}>Ratings</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.brief}>
        <p>
          Brief : Dolor Sit Amet, Consectetur Adipiscing Elit. Fringilla Enim,
          At Rhoncus Nisl, Condimentum Vitae Enim. Ipsum Aliquet Aliquet Viverra
          Pharetra
        </p>
      </div>
      <div className={styles.actions}>
        <button className={styles.bookTrialButton}>Book Trial | $20/Hr</button>
        <button className={styles.quickViewButton}>QuickView Details</button>
        <button className={styles.chatButton}>Chat With Tutor</button>
      </div>
    </div>
  );
};

export default Card;
