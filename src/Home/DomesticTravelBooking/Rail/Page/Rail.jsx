import React from "react";
import styles from "./page.module.css";

const Rail = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Coming soon</h1>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil quas, natus earum exercitationem placeat? Expedita veniam totam nostrum voluptatibus et deserunt impedit hic iste corporis, voluptates numquam, esse maiores ipsa facilis consectetur consequuntur veritatis, nemo cumque minima porro aperiam eius dolorem beatae enim? Modi totam rem cupiditate ad voluptas quo commodi temporibus placeat, nulla dolore nostrum incidunt. Quam repellendus cum laboriosam in minus officia quo iste numquam veritatis, vel odit ipsa ut possimus deserunt sit culpa? Culpa voluptates aperiam ex, expedita eaque fuga? Sequi nostrum unde accusamus ut vero! Quod itaque nemo a ut sunt rerum, autem sapiente et!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rail;
