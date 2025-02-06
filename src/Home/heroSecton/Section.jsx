import React from "react";
import styles from "./Section.module.css";

const Section = () => {
  return (
    <div className={styles.container}>
      <div className={styles["main-section"]}>
        <div>
          <h1 className={styles["sec-title"]}>
            Let’s build an awesome project together
          </h1>
          <p className={styles.title}>
            Each demo built with Teba will look different. You can customize
            almost anything in the appearance of your website with only a few
            clicks. Each demo built with Teba will look different.
          </p>
        </div>

        <div className={styles["sub-container"]}>
          <div className={styles["left-section"]}>
            <div className={styles.icon}>
              <i className="ri-map-pin-line"></i>
            </div>
            <div>
              <h3>Address</h3>
              <p>1791 Yorkshire Circle Kitty Hawk, NC 279499</p>
            </div>
          </div>
          <div className={styles["right-section"]}>
            <div>
              <i className="ri-mail-line"></i>
            </div>
            <div>
              <h3>Contact</h3>
              <p>info@mirrortheme.com 518-564-3200</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.container2}>
        <div className={styles["form-container"]}>
          <h2 className={styles["form-title"]}>Fill The Contact Form</h2>
          <p className={styles["form-subtitle"]}>
            Feel free to contact with us, we don’t spam your email
          </p>
          <form className={styles["contact-form"]}>
            <div className={styles["form-row"]}>
              <input
                type="text"
                placeholder="Your name"
                className={styles["form-input"]}
              />
              <input
                type="text"
                placeholder="Phone number"
                className={styles["form-input"]}
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className={`${styles["form-input"]} ${styles["full-width"]}`}
            />
            <textarea
              placeholder="Write your message"
              className={styles["form-textarea"]}
            ></textarea>
            <button type="submit" className={styles["form-button"]}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section;
