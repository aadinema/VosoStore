import React from "react";
import styles from "./page2.module.css";

const Page2 = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Offer insurance services and Become an insurance agent</h1>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.primaryImage}>
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb1-1.png"
                alt="img1"
                className={styles.image1}
              />
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape1.svg"
                alt="img2"
                className={styles.image3}
              />
            </div>
            <div className={styles.secondaryImage}>
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape2.svg"
                alt="img3"
                className={styles.image4}
              />
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb2-1.png"
                alt="img4"
                className={styles.image2}
              />
            </div>
          </div>

          <div className={styles.right}>
            <p className={styles.paragraph}>
            Life is uncertain and only one thing facilitates the loss is Insurance. Which helps you protect your loved ones and avoid any loss. There are many kinds of insurance like Life Insurance, health, child, term, or for a specific disease. VOSO has partnered with many insurance providers for the term, life, health, travel, vehicle insurance for our customers to avail all kinds of insurance with the best prices and easy process across India through VOSO Store partners. We have covered most of the insurance plans and made an easy smooth process for store partners. They just need to choose the type of insurance customer needs and within few seconds all the available plans are shown, you customer can compare the plans and can pick the best that suits their needs. VOSO has the highest commission rate on all insurance services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
