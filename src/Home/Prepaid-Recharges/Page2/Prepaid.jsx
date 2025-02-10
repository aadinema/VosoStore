import React from "react";
import styles from "./page.module.css";

const Prepaid = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Prepaid Recharge</h1>
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
            Prepaid Recharge is one of the most sought services by merchants who wish to start their entrepreneurial journey. It gives a merchant ample customer walk-ins. VOSO mobile recharges to give you the liberty to check all the plans available and pick out the best that suits the requirements and within a few clicks get the recharge done. VOSO does not charge any extra amount while making recharges and you get a significant income. We have made it a single-touch recharge point with the VOSO app. Click on the recharge and you are up to recharge which saves your time and effort.VOSO can make all kinds of recharges, Internet, call, and various operators such as Airtel, Vodafone, Idea, Jio, TATA Indicom, BSNL, Videocon Reliance GSM. VOSO has a great success ratio in each transaction and recharges, but to provide the best customer experience, we have one call support system, which provides you with the solution to any problem you face.
            </p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="https://vosostore.com/img/Group%201268.png" alt="SSF" />
        </div>
      </div>
    </>
  );
};

export default Prepaid;
