"use client";
import React, { useState, useEffect ,useCallback} from "react";
import { useParams } from "next/navigation"; // Get URL parameters
import styles from "./apply.module.css";
import { useRouter } from "next/navigation";

const Apply = ({params}) => {
   const { title,slug } = useParams(); // Get job title from URL parameters  
  
   const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    resume: null, // Store the resume file
    chosenJobProfile: title ? title.replace(/%20/g, " ") : "",
    currentLocation: "",
    currentCtc: "",
    expectedCtc: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    },
    [formData]
  );
  const handleFileChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      setFormData({ ...formData, resume: file });
    },
    [formData]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      // Check if each field is filled in
      if (!formData.name) {
        alert("Please enter your name.");
        return;
      }

      if (!formData.email) {
        alert("Please enter your email address.");
        return;
      }

      if (!formData.phoneNumber) {
        alert("Please enter your phone number.");
        return;
      }

      if (!formData.resume) {
        alert("Please upload your resume.");
        return;
      }
      if (!formData.currentLocation) {
        alert("Please provide your current location.");
        return;
      }

      if (!formData.chosenJobProfile) {
        alert("Please enter the chosen job profile.");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Phone number validation
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }

      setSubmitting(true);
      try {
        const formDataToSend = new FormData(); // Create FormData object
        formDataToSend.append("jobId", slug);
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phoneNumber", formData.phoneNumber);
        formDataToSend.append("resume", formData.resume); // Append the resume file
        formDataToSend.append("chosenJobProfile", formData.chosenJobProfile);
        formDataToSend.append("currentLocation", formData.currentLocation);
        formDataToSend.append("currentCtc", formData.currentCtc);
        formDataToSend.append("expectedCtc", formData.expectedCtc);

        // Send POST request with Axios
        const response = await axios.post(
          `${BACKEND_URL}/job/Apply/${slug}`,
          formDataToSend
        );
        if (response.data?.success) {
          setSubmitting(false);
          setSubmitSuccess(true);
          // Clear form after successful submission
          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            resume: null,
            chosenJobProfile: "",
          });
          router.push("/career/thankyou");
        }
      } catch (error) {
        console.error("Error submitting application:", error);
        alert(error.response.data.error);
        router.push("/career");
        setSubmitting(false);
      }
    },
    [formData, router, slug]
  );
  const copyEmailToClipboard = useCallback((email) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        // Alert message
        alert("Email copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }, []);
  
 

  // Handle form submission
   

  return (
    <div className={styles.container}>
      <div className={styles.infoSection}>
        <h1 className={styles.title}>Vacancy Form</h1>
        <p className={styles.breadcrumb}>
          Home / <span>Vacancy Form</span>
        </p>
        <h2 className={styles.subheading}>You are almost there</h2>
        <p>Apply for {title}</p> {/* Use jobTitle instead of job.title */}
        <p className={styles.email}>career@quintualtech.co.in ✉</p>
        <p className={styles.email}>hr@quintualtech.co.in ✉</p>
      </div>
      <div className={styles.formSection}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>Apply for a Job</h2>
          <label htmlFor="jobProfile">Chosen Job Profile</label>
          <input type="text" id="jobProfile" value={title} disabled />
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            required
          />
          <label htmlFor="resume">Resume</label>
          <input type="file" id="resume" accept=".pdf,.doc,.docx" required />
          <label htmlFor="location">Enter Your Current Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            required
          />
          <label htmlFor="currentCTC">Enter Your Current CTC (optional)</label>
          <input type="text" id="currentCTC" placeholder="Enter CTC" />
          <label htmlFor="expectedCTC">
            Enter Your Expected CTC (optional)
          </label>
          <input
            type="text"
            id="expectedCTC"
            placeholder="Enter expected CTC"
          />
          <button type="submit" className={styles.submitBtn}>
            SUBMIT APPLICATION
          </button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
