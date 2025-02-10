import React from "react";
import styles from "./page.module.css";

const DMTB = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Domestic Money Transfer Business</h1>
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
            With the minimum transaction charges, VOSO has launched a Domestic Money Transfer service. The emergence of transferring money can arrive at any time, sending money to children for their studies or to parents for their health checkup, it is required to send money instantly in such tough situation and if this urgency arrives during non-working hours of banking institutions or you have to stand in a long queue, the situation can be worse. With the VOSO portal, our store partners can transfer amounts across India. These transactions take only a few seconds to be completed and with VOSO’s secure payment method, money reaches securely to the receiver’s account. Along with the VOSO portal, our partners can also provide domestic money transfer services at any time through the VOSO app, which completes the transaction in few steps.VOSO also provides experts support for any problem if one faces during the transaction. With this essential service, we ensure the minimum transaction rates and the high earning potential of our partners.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DMTB;
