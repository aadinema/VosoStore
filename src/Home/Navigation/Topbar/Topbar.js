import React from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import styles from "./topbar.module.css";

const Topbar = () => {
  return (
    <div className={styles.topBar}>
      {/* Contact Info */}
      <div className={styles.topInfo}>
        <span className={styles.topItem}>
          <FaPhoneAlt className={styles.icon} /> +919109854630
        </span>
        <span className={styles.topItem}>
          <IoIosMail className={styles.icon} /> hello@voso.store
        </span>
      </div>

      {/* Social Media Links */}
      <div className={styles.topContact}>
        <div className={styles.socialLinks}>
          <a href="#" className={`${styles.socialIcon} ${styles.instaColor}`}><FaInstagram /></a>
          <a href="#" className={`${styles.socialIcon} ${styles.fbColor}`}><FaFacebookF /></a>
          <a href="#" className={`${styles.socialIcon} ${styles.lnColor}`}><FaLinkedinIn /></a>
          <a href="#" className={`${styles.socialIcon} ${styles.twColor}`}><FaTwitter /></a>
          <a href="#" className={`${styles.socialIcon} ${styles.ytColor}`}><FaYoutube /></a>
        </div>
      </div>
    </div>

    // main nav
  );
};

export default Topbar;
