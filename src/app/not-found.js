import React from "react";
import styles from "./notfound.module.css";

const Page2 = () => {
  return (
    <>
      <div className={styles.container}>
        <img
          src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/11/errors404.svg"
          alt="404_Image"
          className={styles.image}
        />
        <h1 className={styles.heading}>Oops, this page is not found</h1>
        <p className={styles.paragraph}>
          The page you’re looking for can’t be found. Double-check the URL and
          try <br /> again. we invite you to visit our homepage.
        </p>
        
        <button className={styles.bt}>Back To Homepage</button>
      </div>
    </>
  );
};

export default Page2;
