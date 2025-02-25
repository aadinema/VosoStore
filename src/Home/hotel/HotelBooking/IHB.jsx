import React from "react";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const IHB = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>B2B Hotel Booking Portal for Franchise Partners</h1>
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
            As most of the travellers like to book hotels for their stay online, getting best hotels at affordable rates is what people look for. VOSO has been associated with various brands and brought the best offers for its partners to serve their customers. With VOSO, our store partners are able to book hotels efficiently with the best offers. To provide the smooth and hassle free experience, our experts provides the training and support. One of the best B2B portals for hotel booking, VOSO provides seamless experience. Hotels can be booked within few minutes with 2-3 steps. VOSO is one stop solution for hotel bookings as we provide bookings for every part of the nation. Book hotels anytime with VOSO app and save your customers from the last minute hustle. We have the highest percentage of commission for our partners. With multiple options at one place, you can increase the customers walk-ins at your store and get significant earnings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IHB;
