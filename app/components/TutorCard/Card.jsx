// Card.jsx
import styles from "./Card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <section className={styles.card}>
      <div className={styles.imageContainer}>
        <h1 className={styles.heading}>Top Tutor</h1>
        <img
          src="https://s3-alpha-sig.figma.com/img/4d43/1ea6/8f5608be5307fd0c87a7964c98b5ff50?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S3n91ZLJ4AOAqtr14-1wqt1puVRMdIsmDuKTB5wUeio0JZVEWps9~ll~ARmhE4fCkSHtin6wrGqnLapi2wKYH8fXCM9piZeZfx7t7gGG2hD~XuX3BZeiLwQ1sbmswHbgsm2NG0h14njic-KQrAZom7DIYYLV~zHGV4y0ys1g6NgEsJiaBSXpbNEm-jqyC5lPr-29mg6hzQ5yS3NYMY8isnpiryPtbAfjL3zpmAaYPurVR9HfgyAivt4se45iGQrlAjb7WHVJXWWwAKJeFOV1DVI6ysWCrVBhRJIymBqi7cBKshrLojBqCxma7GvoIOueTXwvCMCCyb5n1X9A61-fdQ__"
          alt="Your Image"
          className={styles.image}
        />
        <img src="/save.png" alt="" className={styles.icon} />
      </div>

      <div className={styles.infoContainer}>
        <img
          src="/profile.png"
          alt="profile photo"
          className={styles.infoImage}
        />
        <div className={styles.infoDetails}>
          <h1 className={styles.infoName}>Radhakishan J.</h1>
          <img src="/tick.png" alt="green tick" className={styles.greentick} />
          <img
            src="/uk.png"
            alt="united states flag"
            className={styles.infoAvatar}
          />
        </div>
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.subjects}>
          <img
            src="/degree.png"
            alt="degree icon"
            className={styles.subjectsIcon}
          />
          <h2 className={styles.subjectsTitle}>English, Geography, +3</h2>
        </div>
        <div className={styles.languages}>
          <img
            src="/lang.png"
            alt="language spoken"
            className={styles.languagesIcon}
          />
          <h3 className={styles.languagesTitle}>
            English (Native), Hindi (Conversational) +1
          </h3>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span>Active</span>
            <span>Students </span>
            <span className={styles.statspan}>3</span>
          </div>
          <div className={styles.stat}>
            <span>Session</span>
            <span>Finished</span>
            <span className={styles.statspan}>45</span>
          </div>
          <div className={styles.stat}>
            <span>4.5 ⭐</span>
            <span>Ratings</span>
            <span className={styles.statspan}>172</span>
          </div>
        </div>
        <p className={styles.brief}>
          <span className={styles.briedBold}>Brief :</span>
          dolor sit amet, consectetur adipiscing elit. Fringilla enim, at
          rhoncus nisl, condimentum <br /> vitae enim. Ipsum aliquet aliquet
          viverra pharetra
        </p>
        <button className={styles.bookButton}>Book Trial | $20/hr</button>
        <p className={styles.circle}></p>
        <p className={styles.circle2}></p>
        <p className={styles.circle3}></p>
      </div>

      <div className={styles.actions}>
        <div className={styles.action}>
          <img src="/view.png" alt="" className={styles.actionIcon} />
          <p className={styles.actionText}>QuickView Details</p>
        </div>
        <div className={styles.action}>
          <img src="/msg.png" alt="" className={styles.actionIcon} />
          <p className={styles.actionText}>Chat with Tutor</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
