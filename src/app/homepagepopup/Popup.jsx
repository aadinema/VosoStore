"use client";
import styles from "./popup.module.css";

const Popup = ({ imageUrl, isVisible, onClose }) => {
  return (
    <div className={`${styles.overlay} ${isVisible ? styles.show : ""}`}>
      <div className={styles.popup}>
        <img src={imageUrl} alt="Popup Image" className={styles.image} />
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default Popup;
