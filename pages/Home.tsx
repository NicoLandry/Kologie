import React from "react";

const Home: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Main Section */}
      <main style={mainSectionStyle}>
        <h1 style={headingStyle}>Welcome to ProLoc</h1>
        <p style={descriptionStyle}>
          Blockchain-powered lease management for small landlords.
        </p>
        <button
          onClick={() => alert("Get Started with ProLoc!")}
          style={ctaButtonStyle}
        >
          Get Started
        </button>
      </main>
    </div>
  );
};

// ✅ Styles
const mainSectionStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "50px 20px",
};

const headingStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#007acc",
  marginBottom: "20px",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  color: "#555555",
  marginBottom: "30px",
};

const ctaButtonStyle: React.CSSProperties = {
  padding: "15px 30px",
  fontSize: "1.2rem",
  backgroundColor: "#34C759",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Home;
