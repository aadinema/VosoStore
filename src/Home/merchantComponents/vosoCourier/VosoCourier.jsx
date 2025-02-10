import React from "react";
import styles from "@/Home/merchantComponents/vosoCourier/vosocourier.module.css";
import {
  FaStore,
  FaShoppingCart,
  FaTruck,
  FaBoxes,
  FaUserPlus,
} from "react-icons/fa";

const users = [
  { type: "Small and medium retailers", icon: <FaStore /> },
  { type: "E-commerce businesses", icon: <FaShoppingCart /> },
  { type: "Local delivery service providers", icon: <FaTruck /> },
  { type: "Logistic service aggregators", icon: <FaBoxes /> },
  { type: "Entrepreneurs entering the logistics market", icon: <FaUserPlus /> },
];

const VosoCourier = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.categoriesTitle}>Who Can Use Voso Courier?</h3>
      <div className={styles.categories}>
        <div>
          <ul className={styles.categoriesUl}>
            {users.map((user, index) => (
              <li key={index}>
                <a href="">
                  {user.icon} 
                  {user.type}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VosoCourier;
