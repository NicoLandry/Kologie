import React from "react";
import { useTranslation } from "react-i18next";

const NavBar: React.FC = () => {
  const { i18n } = useTranslation();

  // Toggle language between EN and FR
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav style={navBarStyle}>
      {/* Logo */}
      <div style={logoContainerStyle}>
        <div style={logoStyle}></div>
        <h1 style={logoTextStyle}>ProLoc</h1>
      </div>

      {/* Navigation Links */}
      <div style={navLinksContainerStyle}>
        <a href="#pricing" style={navLinkStyle}>Pricing</a>
        <a href="#blog" style={navLinkStyle}>Blog</a>
        <a href="#contact" style={navLinkStyle}>Contact</a>
        <a href="#login" style={navLinkStyle}>Login</a>
      </div>

      {/* Start Now Button + Language Toggle */}
      <div style={actionsContainerStyle}>
        <button style={startNowButtonStyle}>Start Now</button>
        <button onClick={toggleLanguage} style={languageToggleStyle}>
          {i18n.language.toUpperCase()} {/* Display EN or FR */}
        </button>
      </div>
    </nav>
  );
};

// ✅ Styles with Contrast for FR/EN
const navBarStyle: React.CSSProperties = {
  backgroundColor: "#25274D",
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "white",
};

const logoContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const logoStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  backgroundColor: "#464866",
  borderRadius: "8px",
  marginRight: "10px",
};

const logoTextStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#EFEFEF",
};

const navLinksContainerStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
};

const navLinkStyle: React.CSSProperties = {
  color: "#AAABB8",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "color 0.3s",
};

const actionsContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const startNowButtonStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#34C759",
  borderRadius: "20px",
  color: "#FFFFFF",
  fontWeight: "bold",
  cursor: "pointer",
};

const languageToggleStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#34C759", // Contrast color for better visibility
  color: "#FFFFFF", // Text color for readability
  fontWeight: "bold",
  border: "2px solid #EFEFEF", // Optional border for aesthetics
  fontSize: "1rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.3s, color 0.3s",
};

export default NavBar;
