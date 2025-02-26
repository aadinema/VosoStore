"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./career.module.css";
import Breadcrumb from "./breadcrumb/breadcrumb";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch jobs
        const jobsResponse = await fetch(
          "https://quintustech-backend.vercel.app/api/job/getAll"
        );
        const jobsData = await jobsResponse.json();

        // Fetch departments
        const deptResponse = await fetch(
          "https://quintustech-backend.vercel.app/api/job/getAllDepartment"
        );
        const deptData = await deptResponse.json();

        // Handle jobs data
        if (jobsData?.success && Array.isArray(jobsData.data)) {
          setJobs(jobsData.data);
        } else {
          throw new Error("Invalid jobs data format");
        }

        // Handle departments data
        if (deptData?.success && Array.isArray(deptData.data)) {
          const departmentNames = deptData.data.map(
            (dept) => dept.departmentName
          );
          setDepartments(departmentNames);
          setActiveCategory(departmentNames[0] || "");
        } else {
          throw new Error("Invalid departments data format");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleViewDetails = (jobId) => {
    router.push(`/career/${jobId}`);
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <span className={styles.loader}></span>
      </div>
    );
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.careerContainer}>
      <Breadcrumb data={{ head: "Career", subheading: "Career" }} />
      <section className={styles.headerSection}>
        <h2 className={styles.subTitle}>Career / Job Opportunities</h2>
        <div className={styles.categories}>
          {departments.map((department) => (
            <button
              key={department}
              className={`${styles.categoryButton} ${
                activeCategory === department ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(department)}
            >
              {department}
            </button>
          ))}
        </div>
      </section>

      <div className={styles.jobList}>
        {jobs.length > 0 ? (
          jobs
            .filter((job) => job.department === activeCategory)
            .map((job) => (
              <div key={job._id} className={styles.jobCard}>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <div className={styles.jobMeta}>
                  <span>📍 {job.location}</span>
                  <span>⏳ {job.employmentType}</span>
                  <span>💼 {job.experience}</span>
                </div>
                <button
                  className={styles.detailsButton}
                  onClick={() => router.push(`/career/${job.slug}`)} // Use job.slug from API
                >
                  View Details
                </button>
              </div>
            ))
        ) : (
          <p className={styles.noJobs}>No current openings in this category</p>
        )}
      </div>
    </div>
  );
};

export default Career;
