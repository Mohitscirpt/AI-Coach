import React, { useState } from "react";
import { FaUpload, FaArrowRight, FaEnvelope, FaUsers } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

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
    cursor: "pointer",
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
  iframe: {
    width: "250px",
    height: "150px",
    border: "1px solid #444",
    borderRadius: "10px",
    marginTop: "1rem",
  },
  textarea: {
    width: "65%",
    marginTop: "1.5rem",
    borderRadius: "12px",
    padding: "1rem 1.25rem",
    fontSize: "1rem",
    fontFamily: "'Inter', sans-serif",
    lineHeight: "1.6",
    backgroundColor: "#111",
    color: "#fff",
    border: "1px solid #444",
    outline: "none",
    resize: "vertical",
    boxShadow: "0 2px 8px rgba(255, 255, 255, 0.05)",
    transition: "border-color 0.3s, box-shadow 0.3s",
  },
  analysisBox: {
    marginTop: "1rem",
    background: "#222",
    color: "#fff",
    padding: "1rem",
    borderRadius: "10px",
    textAlign: "left",
  },
};

const ResumeSection = () => {
  const [resume, setResume] = useState(null);
  const [preview, setPreview] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [analysis, setAnalysis] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleAnalyse = async () => {
    if (!resume || !jobDesc) {
      alert("Please upload a resume and enter a job description.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDescription", jobDesc);

    try {
      const res = await axios.post("http://localhost:5000/api/analyse", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setAnalysis(res.data.analysis);
    } catch (error) {
      setAnalysis("Error analyzing resume.");
    }
  };

  return (
    <>
      

      <section style={styles.section}>
        <p style={styles.text}>
          Upload your resume to let our AI analyze, optimize, <br />
          and prepare it for recruiter success and ATS approval.
        </p>

        {!resume ? (
          <label style={styles.uploadBtn}>
            Upload Resume <FaUpload />
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>
        ) : (
          <>
            <div>
              <p>Preview</p>
              <iframe src={preview} style={styles.iframe} title="Resume Preview" />
            </div>

            <textarea
              placeholder="Enter the job description here..."
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
              rows={6}
              style={styles.textarea}
              onFocus={(e) => (e.target.style.borderColor = "#764ba2")}
              onBlur={(e) => (e.target.style.borderColor = "#444")}
            />
            <br></br>
            <button
              onClick={handleAnalyse}
              style={{
                ...styles.uploadBtn,
                marginTop: "1.25rem",
                background: "#4e3dfc",
                color: "#fff",
              }}
            >
              Analyse
            </button>

            {analysis && (
              <div style={styles.analysisBox}>
                <strong>Analysis Result:</strong>
                <p>{analysis}</p>
              </div>
            )}
          </>
        )}

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