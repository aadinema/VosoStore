import React from "react";
import styles from "@/Home/vosoVyapar/Page1.module.css";

const vosoVyapar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Boost Your Business with Digital Presence
          </h1>
          <p className={styles.subParagraph}>
            Expand your reach, attract new customers, and grow your business
            with our proven digital solutions.
          </p>
          <div>
            <button className={styles.primaryButton}>Work With Us</button>
            <button className={styles.secondaryButton}>
              Let's Grow Your Business →
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imageContainer}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/hero-thumb3.png"
              alt="img"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default vosoVyapar;
