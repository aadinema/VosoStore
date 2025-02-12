"use client";
import { useEffect } from "react";
import styles from "./popup.module.css";

const PopupModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.open : ""}`} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <h2 className={styles.heading}>Schedule a demo</h2>
        <div className={styles.inputGroup}>
          <label>Name</label>
          <input type="text" placeholder="Enter Name" />
        </div>
        <div className={styles.inputGroup}>
          <label>Email address</label>
          <input type="email" placeholder="Enter Email" />
        </div>
        <div className={styles.inputGroup}>
          <label>Phone</label>
          <input type="tel" placeholder="Enter Phone Number" />
        </div>
        <div className={styles.inputGroup}>
          <label>Partner interest</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input type="radio" name="partner" value="store" />
              Demo store partner
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="partner" value="marketing" />
              Demo marketing partner
            </label>
          </div>
        </div>
        <button className={styles.submitButton}>Submit</button>
      </div>
    </div>
  );
};

export default PopupModal;