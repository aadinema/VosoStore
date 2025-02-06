import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo and Description */}
        <div className={styles.section}>
        <Link href="/">
            <Image
              src="/images/vosostorelogo.png"
              alt="logo"
              width={90}
              height={35}
              priority
            />
          </Link>
          <p className={styles.description}>
            Each demo built with Teba will look different. You can customize
            almost anything in the appearance of your website with only a few.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}><i class="ri-facebook-fill"></i></a>
            <a href="#" className={styles.socialIcon}><i class="ri-linkedin-fill"></i></a>
            <a href="#" className={styles.socialIcon}><i class="remixicon ri-twitter-fill"></i></a>
            <a href="#" className={styles.socialIcon}><i class="ri-instagram-fill"></i></a>
          </div>
        </div>

        {/*  Links */}
        <div className={styles.section}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul className={styles.list}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Become VOSO Store Partner</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.section}>
          <h3 className={styles.title}>Services</h3>
          <ul className={styles.list}>
          <li className>Bill Payments</li>
            <li>Prepaid Recharge</li>
            <li>Domestic Money Transfer</li>
            <li>Online Shopping</li>
            <li>Travel Booking</li>
            <li>Pan Card</li>
            <li>Insurance</li>
          </ul>
        </div>

        {/* Information */}
        <div className={styles.section}>
          <h3 className={styles.title}> Useful Information</h3>
          <ul className={styles.list}>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Refund policy</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2021, All Right Reserved at VOSO RETAIL TECH PRIVATE LIMITED</p>
      </div>
    </footer>
  );
};

export default Footer;
