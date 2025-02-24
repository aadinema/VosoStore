"use client";
import { useState } from "react";
import Link from "next/link"; 
import styles from "./career.module.css";

const jobs = [
  {
    id: 1,
    category: "Technical",
    title: "IT Sales Executive",
    description:
      "For an IT Sales Business Development Executive role, the candidate is responsible for driving sales growth...",
    location: "Indore",
    type: "Full Time",
    experience: "3 Years",
  },
  {
    id: 2,
    category: "Technical",
    title: "Product Manager",
    description:
      "We are a fintech company, and looking for a Product Manager to drive new payment solutions...",
    location: "Indore",
    type: "Full Time",
    experience: "5+ Years",
  },
  {
    id: 3,
    category: "Marketing",
    title: "Digital Marketing Specialist",
    description:
      "We are looking for an experienced Digital Marketing Specialist to manage and strategize our online campaigns...",
    location: "Remote",
    type: "Full Time",
    experience: "2+ Years",
  },
  {
    id: 4,
    category: "Design",
    title: "UI/UX Designer",
    description:
      "We are seeking a talented UI/UX designer to improve user experience across our platforms...",
    location: "Bangalore",
    type: "Full Time",
    experience: "3+ Years",
  },
];

const Career = () => {
  const [activeCategory, setActiveCategory] = useState("Technical");

  const categories = ["Technical", "Marketing", "Design"];

  return (
    <div className={styles.careerContainer}>
      <h1 className={styles.title}>Career</h1>

      {/* Breadcrumb with Link */}
      <p className={styles.breadcrumb}>
        <Link href="/" className={styles.homeLink}>
          Home
        </Link>{" "}
        &gt; Career
      </p>

      <section className={styles.headerSection}>
        <h2 className={styles.subTitle}>Career / Job Opportunities</h2>

        <div className={styles.categories}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <div className={styles.jobList}>
        {jobs
          .filter((job) => job.category === activeCategory)
          .map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <div className={styles.jobMeta}>
                <span>📍 {job.location}</span>
                <span>⏳ {job.type}</span>
                <span>💼 {job.experience}</span>
              </div>
              <button className={styles.detailsButton}>View Details</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Career;
