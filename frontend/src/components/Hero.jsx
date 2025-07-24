import React from "react";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/clerk-react";
import waveBg from "../images/rectangle-wave.png";
import resumeImg from "../images/resumeholder.png";

export default function Hero() {
  const styles = {
    dashboard: {
      width: "100%",
      height: "100%",
      overflowX: "hidden",
      backgroundColor: "#070606",
      color: "#ffffff",
      fontFamily: "'Poppins', sans-serif",
    },
    header: {
      padding: "20px 40px",
      position: "relative",
      zIndex: 10,
    },
    container: {
      maxWidth: "1280px",
      margin: "0 auto",
    },
    topBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      fontSize: "26px",
      fontWeight: "700",
      color: "#fefefe",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    link: {
      textDecoration: "none",
      color: "#ffffff",
      fontWeight: "500",
      margin: "0 10px",
    },
    loginBtn: {
      backgroundColor: "#a78bfa",
      border: "none",
      padding: "8px 18px",
      borderRadius: "13px",
      color: "#fff",
      fontWeight: "600",
      marginLeft: "20px",
      cursor: "pointer",
    },
    heroSection: {
      position: "relative",
      backgroundColor: "#070606",
      padding: "80px 40px 60px",
      overflow: "hidden",
    },
    waveBg: {
      position: "absolute",
      top: "-30px",
      left: 0,
      width: "100%",
      zIndex: 1,
      opacity: 1,
    },
    content: {
      position: "relative",
      zIndex: 2,
      maxWidth: "1280px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      alignItems: "center",
    },
    left: {
      maxWidth: "600px",
    },
    heading: {
      fontSize: "52px",
      color: "#ffffff",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "30px",
      color: "#d1d5db",
      marginBottom: "30px",
    },
    buttons: {
      display: "flex",
      gap: "16px",
    },
    btnPrimary: {
      backgroundColor: "#7c3aed",
      color: "white",
      padding: "12px 26px",
      borderRadius: "8px",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
    },
    btnSecondary: {
      backgroundColor: "transparent",
      color: "#ffffff",
      border: "2px solid #ffffff",
      padding: "12px 26px",
      borderRadius: "8px",
      fontWeight: "600",
      cursor: "pointer",
    },
    rightImg: {
      width: "100%",
      maxWidth: "650px",
    },
  };

  return (
    <div style={styles.dashboard}>
      <header style={styles.header}>
        <div style={styles.container}>
          <img src={waveBg} alt="Wave Background" style={styles.waveBg} />

          <div style={styles.topBar}>
            {/* <div style={styles.logo}>LOGO</div> */}
            <nav style={styles.nav}>
              {}

              {/* <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
                  Login
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn> */}
            </nav>
          </div>

          <section style={styles.heroSection}>
            <div style={styles.content}>
              <div style={styles.left}>
                <h1 style={styles.heading}>Scan Your Resume.</h1>
                <p style={styles.paragraph}>
                  <strong>Strengthen Your Future.</strong>
                </p>
                <div style={styles.buttons}>
                  <button style={styles.btnPrimary}>Get Started</button>
                  <button style={styles.btnSecondary}>Learn More</button>
                </div>
              </div>
              <div>
                <img src={resumeImg} alt="Resume Holder" style={styles.rightImg} />
              </div>
            </div>
          </section>
        </div>
      </header>
    </div>
  );
} 