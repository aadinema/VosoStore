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
                Voso offers the most profitable franchise business in India
              </h1>
              <p className={styles.description}>
                Welcome to VOSO Store, India's largest growing, unified portal
                and multiple service merchant platform with the highest
                commissions and lowest charges in the industry. Join now!
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

        {/* Income Calculator Section */}
        <div className={styles.incomeContainer}>
          <h1 className={styles.subheading}>Income Calculator</h1>
          <p className={styles.paragraph}>
            Calculate how VOSO Store can help you grow your business using our
            online income calculator. See commissions, overall earnings, and
            forecast your income accurately with the VOSO Store income
            calculator. Never leave anything to chance.
          </p>
          <a href="income calculator" className={styles.incomeBt}>
            Calculate Your Income
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;