import React from "react";
import { FaUpload } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaEnvelope, FaUsers } from "react-icons/fa";
import Footer from "./Footer";

const styles = {
  section: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "4rem 1rem",
    textAlign: "center",
    fontFamily: "'Inter', sans-serif",
  },
  text: {
    fontSize: "1.5rem",
    maxWidth: "700px",
    margin: "0 auto 2rem",
    lineHeight: "1.6",
  },
  uploadBtn: {
    background: "linear-gradient(to right, #c9d6ff, #e2e2e2)",
    border: "none",
    borderRadius: "2rem",
    padding: "0.75rem 2rem",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    boxShadow: "0 4px 10px rgba(255,255,255,0.2)",
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

const ResumeSection = () => {
  return (
    <>
      <section style={styles.section}>
        <p style={styles.text}>
          Upload your resume to let our AI analyze, optimize, <br />
          and prepare it for recruiter success and ATS approval.
        </p>

        <button style={styles.uploadBtn}>
          Upload Resume <FaUpload />
        </button>

        <hr style={styles.divider} />

        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <FaEnvelope style={styles.icon} />
            <div style={styles.label}>Cover Letter Generator</div>
            <FaArrowRight style={styles.arrow} />
          </div>

          <div style={styles.card}>
            <FaUsers style={styles.icon} />
            <div style={styles.label}>Interview Preparation</div>
            <FaArrowRight style={styles.arrow} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ResumeSection;
