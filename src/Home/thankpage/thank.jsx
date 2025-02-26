"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./thank.module.css";

const Thank = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/thankyou.svg"
        alt="Thank You"
        width={400}
        height={300}
        className={styles.image}
      />
      <h1 className={styles.heading}>Thank You!</h1>
      <p className={styles.paragraph}>
        Your application has been successfully submitted.
      </p>
      <Link href="/">
        <button className={styles.bt}>Back to Homepage</button>
      </Link>
    </div>
  );
};

export default Thank;
