import React from "react";
import styles from "./homepage.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.imageContent}>
          <img
            src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb1.png"
            alt="Team Working"
            className={styles.heroImage}
          />
          </div>
       
        {/* Right Image */}
        <div className={styles.textContent}>

          
          <h1 className={styles.heading}>
          Exclusive technology to provide IT solutions
          </h1>
          <p className={styles.description}>
          During this time, we’ve built a reputation for excellent clients satisfaction as evidenced by our
          </p>

          <p className={styles.description}>
          Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.
          </p>
          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.primaryButton}`}>more about us</button>
            {/* <button className={`${styles.button} ${styles.secondaryButton}`}>View Services</button> */}
          </div>
        </div>
       
        
      </div>
    </section>
  );
};

export default HeroSection;
