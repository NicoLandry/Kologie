import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer style={footerStyle}>
      {/* Top Section */}
      <div style={topSectionStyle}>
        <div style={logoContainerStyle}>
          <div style={logoStyle}></div>
          <h1 style={logoTextStyle}>ProLoc</h1>
        </div>
        <p style={descriptionStyle}>
          {t("footerDescription")}
        </p>
      </div>

      {/* Links Section */}
      <div style={linksSectionStyle}>
        <div style={columnStyle}>
          <h3 style={columnTitleStyle}>{t("footerProducts")}</h3>
          <a href="#create" style={linkStyle}>{t("createLease")}</a>
          <a href="#faq" style={linkStyle}>FAQ</a>
          <a href="#testimonials" style={linkStyle}>{t("testimonials")}</a>
          <a href="#pricing" style={linkStyle}>{t("pricing")}</a>
        </div>
        <div style={columnStyle}>
          <h3 style={columnTitleStyle}>{t("footerCommunity")}</h3>
          <a href="#blog" style={linkStyle}>Blog</a>
          <a href="#facebook" style={linkStyle}>Facebook</a>
          <a href="#linkedin" style={linkStyle}>LinkedIn</a>
          <a href="#instagram" style={linkStyle}>Instagram</a>
        </div>
        <div style={columnStyle}>
          <h3 style={columnTitleStyle}>{t("footerLegal")}</h3>
          <a href="#privacy" style={linkStyle}>{t("privacyPolicy")}</a>
        </div>
      </div>
    </footer>
  );
};

// ✅ Styles
const footerStyle: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  padding: "40px 20px",
  textAlign: "center",
  borderTop: "1px solid #E0E0E0",
  fontFamily: "'Roboto', Arial, sans-serif",
};

const topSectionStyle: React.CSSProperties = {
  marginBottom: "30px",
};

const logoContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "15px",
};

const logoStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  backgroundColor: "#34C759",
  borderRadius: "8px",
  marginRight: "10px",
};

const logoTextStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#25274D",
};

const descriptionStyle: React.CSSProperties = {
  color: "#555555",
  fontSize: "1rem",
  lineHeight: "1.5",
  maxWidth: "600px",
  margin: "0 auto",
};

const linksSectionStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const columnStyle: React.CSSProperties = {
  textAlign: "left",
  margin: "10px 0",
};

const columnTitleStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#25274D",
  marginBottom: "10px",
};

const linkStyle: React.CSSProperties = {
  display: "block",
  color: "#555555",
  textDecoration: "none",
  fontSize: "1rem",
  margin: "5px 0",
  transition: "color 0.3s",
  cursor: "pointer",
};

export default Footer;
