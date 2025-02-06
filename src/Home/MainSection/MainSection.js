import React from "react";
import styles from "./mainSection.module.css";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            {/* Left Content */}
            <div className={styles.textContent}>
              <h1 className={styles.heading}>
                Voso offers most profitable franchise business in India{" "}
              </h1>
              <p className={styles.description}>
                Welcome to VOSO Store, we are India's largest growing, unified
                portal and multiple service merchant platform with Highest
                Commissions and Lowest Charges in the industry. So, Join now!
              </p>
              <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.primaryButton}`}>
              Become a Voso Store Partner
            </button>
            <button className={`${styles.button} ${styles.secondaryButton}`}>
              View Services
            </button>
          </div>
            </div>
            {/* Right Image */}
            <div className={styles.imageContent}>
              <Link href="/">
                <Image
                  src="/images/vosooffer.jpg"
                  alt="vosooffer"
                  width={610}
                  height={402}
                  priority
                  className={styles.heroImage}
                />
              </Link>
            </div>
          </div>
        </section>

        <div className={styles.incomeContainer}>
          <h1 className={styles.subheading}>Income Calculator</h1>
          <p className={styles.paragraph}>
            Calculate, how VOSO Store can help you grow your business by using
            our online income calculator. See the commissions, and overall
            earnings and forecast your income accurately with the VOSO Store
            income calculator, and never let anything on chance.
          </p>
          <a href="income calculator" className={styles.incomeBt}>Calculate Your Income</a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
