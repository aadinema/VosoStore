import React from "react";
import styles from "./page.module.css";

const Bus = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Bus Ticket booking services</h1>
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
            Through the VOSO store, customers can use our store's facilities to book any bus. Since travel is a booming industry, we make sure to provide affordable travel solutions and multiple services in one place. Our partners can book buses for every part of the nation. We provide expert training and one-touch support. Now you can easily book bus tickets using the VOSO portal and mobile app. Now you can compare bus ticket plans and facilities and choose the best one for your clients from anywhere in India. We take the initiative to provide the best facility with lowest the bus costs and the best service so that everyone can enjoy a hassle-free journey with the help of VOSO partner stores. We offer the highest commissions to our partners, which adds significant earnings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bus;
