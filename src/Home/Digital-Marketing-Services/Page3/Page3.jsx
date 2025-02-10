"use client"
import React, { useState } from "react";
import styles from "./page3.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const Page3 = () => {

  const faqData = [
    {
      question: "What Do Digital Marketing Experts Actually Do",
      answer:
        "Digital marketing experts specialise in creating and deploying marketing campaigns on the internet that accurately depict your brand values and project your message on the digital space be it ranking your site on the SERP results page or be it increasing your reach on social media. Digital marketing experts create and deploy marketing campaigns that give you results that you desire such as increased leads, more website traffic as well as increased conversions or sales.",
    },
    {
      question: "Does My Business Really Need Digital Marketing Services?",
      answer:
        "Digital marketing captures the potential customers where they are most active, on the internet. With the pinpoint precision that online targeting provides, a business can now, with the help of digital marketing, increase its revenue by serving ads to the right people at the right time to turn them into paying customers thereby increasing your revenue in a cost-effective manner.",
    },
    {
      question: "Will I Get The Work Report Indicating The Work Done By The Agency On My Business?",
      answer:
        "VOSO DMS provides work reports to their clients on a monthly basis thereby allowing you to see and accurately gauge the work done by un on your business and how it is affecting your business in the long run.",
    },
    {
      question: "Which Digital Marketing Services Are Best For Us?",
      answer:
        "It depends on what your business is and what your goals are. What you want to achieve dictates how our experts will design and deploy the online marketing campaigns to achieve the results that you desire. That being said, a website is the home of your business online, So having well-optimized content and a user interface that is aesthetically beautiful, fast, intuitive, and easy to use for your customer is a great place to start your online journey.",
    },
   
  ];


  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className={styles.mainConatiner}>
        <div className={styles.container}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.questionContainer}
                onClick={() => toggleFAQ(index)}
              >
                <h5 className={styles.questionHead}>{`Q${
                  index + 1
                }. ${item.question}`}</h5>
                <button className={styles.iconButton}>
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <div
                className={`${styles.content} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Questions container */}
      {/* <div className={styles.questionSubContainer}>
        <h2 className={styles.heading}>Still have questions?</h2>
        <p className={styles.paragraph}>
          Each demo built with Teba will look different. You can customize almost
          anything in the appearance of your website with only
        </p>
        <button className={styles.bt}>Back To Homepage</button>
      </div> */}
    </>
  );
};

export default Page3;