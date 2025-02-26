"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import styles from "./JobPosting.module.css";
import { BACKEND_URL } from "@/url/url";
import dynamic from "next/dynamic";
const Breadcrumb = dynamic(() => import("@/Home/career/breadcrumb/breadcrumb"));
const JobPosting = ({ slug }) => {
  console.log(slug, "vyuyu");

  const router = useRouter(); // Initialize the router
  const [data, setData] = useState([]);
  console.log(data, "data");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getcareerData = useCallback(async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/job/getById/${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers as needed
        },
        next: { revalidate: 0 },
        cache: "no-store",
      });
      const data = await response.json();
      if (data.success) {
        const career = data.data;
        setLoading(false);
        setData(career);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }, [slug]);
  useEffect(() => {
    setLoading(true);
    getcareerData().then(() => {});
  }, [getcareerData]);

  // Function to handle "Apply Now" button click
  const handleApplyNow = () => {
    router.push(`/career/${data._id}/${encodeURIComponent(data?.title)}`);
  };

  // Function to extract responsibilities and qualifications from requirements
  // const extractSections = (htmlContent) => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(htmlContent, "text/html");

  //   const responsibilities = [];
  //   const qualifications = [];
  //   let currentSection = null;

  //   doc.querySelectorAll("p").forEach((p) => {
  //     const text = p.textContent.trim();

  //     if (text.includes("Key Responsibilities:")) {
  //       currentSection = "responsibilities";
  //     } else if (text.includes("Qualifications:")) {
  //       currentSection = "qualifications";
  //     } else if (currentSection === "responsibilities") {
  //       const content = p.querySelector("span")?.textContent.trim();
  //       if (content) responsibilities.push(content);
  //     } else if (currentSection === "qualifications") {
  //       const content = p.querySelector("span")?.textContent.trim();
  //       if (content) qualifications.push(content);
  //     }
  //   });

  //   return { responsibilities, qualifications };
  // };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Breadcrumb
        data={{ head: "Vacancy-Details", subheading: "Vacancy-Details" }}
      />
      <div className={styles.jobPosting}>
        <h1 className={styles.title}>{data?.title}</h1>
        <p className={styles.company}>Quintus Tech Pvt Ltd</p>
        <p className={styles.type}>{data?.employmentType}</p>
        <p className={styles.experience}>{data?.experience}</p>
        <p className={styles.description}>{data?.description}</p>

        <p
          dangerouslySetInnerHTML={{ __html: data?.requirements }}
          className={styles.requirements}
        ></p>

        <button className={styles.applyButton} onClick={handleApplyNow}>
          Apply Now
        </button>
        <div className={styles.shareButton}>
          <h3 className={styles.shareText}>Share this opening with friends</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fquintustech.in%2Fcareer%2F"
              target="_blank"
            >
              <i className="ri-facebook-fill"></i>
            </a>

            <a
              href="https://x.com/intent/tweet?url=https%3A%2F%2Fquintustech.in%2Fcareer&text=Check%20out%20this%20awesome%20blog%20post!"
              target="_blank"
            >
              <i className="ri-twitter-fill"></i>
            </a>

            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fquintustech.in%2Fcareer"
              target="_blank"
            >
              <i className="ri-linkedin-fill"></i>
            </a>

            <i className="ri-whatsapp-fill">
              <a href="#"></a>
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPosting;
