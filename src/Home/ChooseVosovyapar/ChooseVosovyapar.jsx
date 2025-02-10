"use client";
import styles from "./page2.module.css";
import {
  FaChartLine,
  FaBoxOpen,
  FaMoneyBillWave,
  FaUndoAlt,
  FaGavel,
  FaEye,
  FaGlobe,
  FaBullhorn,
  FaShoppingCart,
  FaHandshake,
} from "react-icons/fa";

const ChooseVosovyapar = () => {
  const data1 = [
    {
      title: "Data-Driven Decisions",
      description:
        "Digital tools provide valuable data on customer behavior, enabling SMBs to make informed business decisions.",
      icon: <FaChartLine />,
    },
    {
      title: "Improved Inventory Management",
      description:
        "Digital inventory management systems help SMBs track stock levels, predict demand, and optimize supply chains.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Easier Financial Transactions",
      description:
        "Digital payment options simplify transactions for both businesses and customers, reducing reliance on cash.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Adaptation to Changing Times",
      description:
        "The COVID-19 pandemic showed that an online presence helps businesses pivot their operations and continue serving customers.",
      icon: <FaUndoAlt />,
    },
    {
      title: "Access to Government Initiatives",
      description:
        "Various government initiatives in India support the digitization of SMBs, providing financial incentives and resources.",
      icon: <FaGavel />,
    },
  ];
  const data2 = [
    {
      title: "Market Expansion",
      description:
        "Digital platforms provide opportunities to tap into regional, national, and even international markets.",
      icon: <FaGlobe />,
    },
    {
      title: "Cost-Effective Marketing",
      description:
        "Digital marketing offers cost-effective options, allowing SMBs to reach their target audience without a significant financial burden.",
      icon: <FaBullhorn />,
    },
    {
      title: "Customer Convenience",
      description:
        "By offering online shopping, delivery services, or reservations through digital channels, mom and pop shops can cater to customer preferences.",
      icon: <FaShoppingCart />,
    },
    {
      title: "Competitive Edge",
      description:
        "SMBs that embrace digital transformation can compete more effectively by offering similar conveniences and access to information.",
      icon: <FaHandshake />,
    },
    {
      title: "Increased Visibility",
      description:
        "Going digital allows SMBs to establish an online presence, making them visible to a broader audience.",
      icon: <FaEye />,
    },
  ];
  return (
    <div>
      <h2 className={styles.heading}>
        Why Every Business Should <br /> Have Digital Presence
      </h2>
      <p className={styles.paragraph}>
        In today's digital revolution in India, embracing digital ways of doing
        business is of paramount importance for small and medium-sized
        businesses (SMBs), including traditional mom and pop shops and
        nook-and-corner stores.
      </p>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>
          <a href="#">Call Now →</a>
        </button>
      </div>

      <div className={styles.container}>
        {/* Left Container */}
        <div className={styles.leftContainer}>
          {data1.map((item, index) => (
            <div key={index} className={styles.card}>
              <div>
                <i className={styles.icon}>{item.icon}</i>
              </div>
              <div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <a href="#" className={styles.learnMore}>
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Container */}
        <div className={styles.rightContainer}>
          {data2.map((item, index) => (
            <div key={index} className={styles.card}>
              <div>
                <i className={styles.icon}>{item.icon}</i>
              </div>
              <div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <a href="#" className={styles.learnMore}>
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseVosovyapar;
