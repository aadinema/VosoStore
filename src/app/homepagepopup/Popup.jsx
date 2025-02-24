"use client";
import styles from "./popup.module.css";

const Popup = ({ imageUrl, isVisible, onClose }) => {
  if (!isVisible) return null; // Prevent rendering when not visible

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      onClose(); // Close if clicked outside the popup
    }
  };

  return (
    <div className={`${styles.overlay} ${isVisible ? styles.show : ""}`} onClick={handleOverlayClick}>
      <div className={styles.popup}>
        <img src={imageUrl} alt="Popup Image" className={styles.image} />
        <button className={styles.closeButton} onClick={onClose} aria-label="Close popup">
          ✖
        </button>
      </div>
    </div>
  );
};

export default Popup;
