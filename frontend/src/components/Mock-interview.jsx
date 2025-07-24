import React, { useState } from "react";
import { FaArrowRight, FaEnvelope, FaClipboardCheck } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";

const styles = {
  section: {
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "4rem 1rem",
    textAlign: "center",
    fontFamily: "'Inter', sans-serif",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  subHeading: {
    fontSize: "1rem",
    color: "#ccc",
    marginBottom: "2rem",
  },
  textarea: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "1rem",
    borderRadius: "10px",
    border: "1px solid #555",
    backgroundColor: "#111",
    color: "#fff",
    fontSize: "1rem",
  },
  generateBtn: {
    marginTop: "1rem",
    padding: "0.6rem 2rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4e3dfc",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  },
  divider: {
    borderTop: "1px solid #333",
    margin: "3rem auto",
    maxWidth: "90%",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
    marginTop: "2rem",
  },
  card: {
    border: "1px solid #333",
    padding: "1.5rem",
    borderRadius: "1rem",
    width: "260px",
    minHeight: "160px",
    backgroundColor: "#0f0f0f",
    color: "#fff",
    textAlign: "left",
    position: "relative",
    transition: "transform 0.3s",
  },
  icon: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  label: {
    fontSize: "1.1rem",
    fontWeight: "500",
  },
  arrow: {
    position: "absolute",
    right: "1rem",
    bottom: "1rem",
    fontSize: "1rem",
    color: "#aaa",
  },
};

const MockInterview = () => {
  const [jobDesc, setJobDesc] = useState("");

  const handleGenerate = () => {
    // Here you can call your AI API to get mock interview questions
    alert(`Generating questions for: \n${jobDesc}`);
  };

  return (
    <>
    
      <section style={styles.section}>
        <div style={styles.heading}>Mock Interview</div>
        <div style={styles.subHeading}>
          Simulate a real interview with AI-generated questions <br />
          tailored to your role and experience.
        </div>

        <textarea
          style={styles.textarea}
          placeholder="Job Description.................."
          rows={5}
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
        />

        <div>
          <button style={styles.generateBtn} onClick={handleGenerate}>
            Generate
          </button>
        </div>

        <hr style={styles.divider} />

        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <FaClipboardCheck style={styles.icon} />
            <div style={styles.label}>Resume Analyse</div>
            <FaArrowRight style={styles.arrow} />
          </div>

          <div style={styles.card}>
            <FaEnvelope style={styles.icon} />
            <div style={styles.label}>Cover Letter Generator</div>
            <FaArrowRight style={styles.arrow} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MockInterview;