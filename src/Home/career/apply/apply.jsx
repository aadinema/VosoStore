"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./apply.module.css";
import { BACKEND_URL } from "@/url/url";
import axios from "axios"; // Ensure Axios is imported
import dynamic from "next/dynamic";
const Breadcrumb = dynamic(() => import("@/Home/career/breadcrumb/breadcrumb"));

const Apply = () => {
  const { title, slug } = useParams(); // Get job title from URL parameters
  const router = useRouter();

  // Decode job title from URL
  const decodedTitle = title ? decodeURIComponent(title) : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    resume: null,
    chosenJobProfile: decodedTitle,
    currentLocation: "",
    currentCtc: "",
    expectedCtc: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      "name",
      "email",
      "phoneNumber",
      "resume",
      "currentLocation",
      "chosenJobProfile",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(
          `Please enter your ${field.replace(/([A-Z])/g, " $1").toLowerCase()}.`
        );
        return;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("jobId", slug);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("resume", formData.resume);
      formDataToSend.append("chosenJobProfile", formData.chosenJobProfile);
      formDataToSend.append("currentLocation", formData.currentLocation);
      formDataToSend.append("currentCtc", formData.currentCtc);
      formDataToSend.append("expectedCtc", formData.expectedCtc);

      const response = await axios.post(
        `${BACKEND_URL}/job/Apply/${slug}`,
        formDataToSend
      );

      if (response.data?.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          resume: null,
          chosenJobProfile: decodedTitle,
          currentLocation: "",
          currentCtc: "",
          expectedCtc: "",
        });
        router.push("/career/thankyou");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(
        error.response?.data?.error ||
          "An error occurred while submitting your application."
      );
      router.push("/career");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Breadcrumb data={{ head: "vacancy Form", subheading: "Vacancy Form" }} />
      <div className={styles.container}>
        <div className={styles.infoSection}>
          <h1 className={styles.title}>Vacancy Form</h1>
          <p className={styles.breadcrumb}>
            Home / <span>Vacancy Form</span>
          </p>
          <h2 className={styles.subheading}>You are almost there</h2>
          <p>Apply for {decodedTitle}</p>
          <p className={styles.email}>career@quintualtech.co.in ✉</p>
          <p className={styles.email}>hr@quintualtech.co.in ✉</p>
        </div>
        <div className={styles.formSection}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.formTitle}>Apply for a Job</h2>
            <label htmlFor="jobProfile">Chosen Job Profile</label>
            <input type="text" id="jobProfile" value={decodedTitle} disabled />

            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />

            <label htmlFor="resume">Resume</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />

            <label htmlFor="location">Enter Your Current Location</label>
            <input
              type="text"
              id="location"
              name="currentLocation"
              placeholder="Enter location"
              value={formData.currentLocation}
              onChange={handleChange}
              required
            />

            <label htmlFor="currentCTC">
              Enter Your Current CTC (optional)
            </label>
            <input
              type="text"
              id="currentCTC"
              name="currentCtc"
              placeholder="Enter CTC"
              value={formData.currentCtc}
              onChange={handleChange}
            />

            <label htmlFor="expectedCTC">
              Enter Your Expected CTC (optional)
            </label>
            <input
              type="text"
              id="expectedCTC"
              name="expectedCtc"
              placeholder="Enter expected CTC"
              value={formData.expectedCtc}
              onChange={handleChange}
            />

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "SUBMIT APPLICATION"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Apply;
