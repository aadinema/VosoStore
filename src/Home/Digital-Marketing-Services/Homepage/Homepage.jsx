import React from "react";
import styles from "./homepage.module.css";
import Home from "@/app/page";

const Homepage = () => {
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
            Get the Best Digital Marketing Services in India
          </h1>
          <p className={styles.description}>
            We are providing the best digital marketing services in India. We
            design and deploy well-rounded digital marketing services that are
            as unique as you are!
          </p>

          <p className={styles.description}>
            Same shoes don't fit all just like the same online marketing
            services. We at VOSO DMS provide the best in class internet
            marketing service and specialize in creating and implementing top
            digital marketing services that cater to the needs of your brand, a
            top digital marketing service as unique as you are.
          </p>
          <p className={styles.description}>
            <b> our Internet marketing services </b>
            include designing Web presence, Website auditing, Social media
            marketing, Search engine optimization (SEO) services, Local SEO
            services, Content, and graphic design services, PPC, Social media
            presence and optimization, Search engine marketing, Ad campaign
            services.
          </p>
          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.primaryButton}`}>
              more about us
            </button>
            {/* <button className={`${styles.button} ${styles.secondaryButton}`}>View Services</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
