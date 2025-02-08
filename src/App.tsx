import React from "react";
import { useTranslation } from "react-i18next";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#EFEFEF", minHeight: "100vh" }}>
      <NavBar />

      {/* Header Section */}
      <header style={headerStyle}>
        <h1 style={{ color: "#EFEFEF" }}>{t("welcome")}</h1>
        <p style={{ color: "#AAABB8" }}>{t("description")}</p>
      </header>

      {/* Main Content */}
      <main style={{ padding: "50px 20px", textAlign: "center" }}>
        <section id="pricing" style={sectionStyle}>
          <h2>{t("pricing")}</h2>
          <p>{t("pricingDescription")}</p>
        </section>

        <section id="blog" style={sectionStyle}>
          <h2>{t("blog")}</h2>
          <p>{t("blogDescription")}</p>
        </section>

        <section id="contact" style={sectionStyle}>
          <h2>{t("contact")}</h2>
          <p>{t("contactDescription")}</p>
        </section>
      </main>

      {/* Footer Section */}
      <footer style={footerStyle}>
        <p>&copy; 2025 ProLoc. {t("allRightsReserved")}</p>
      </footer>
    </div>
  );
};

// Styles
const headerStyle: React.CSSProperties = {
  backgroundColor: "#25274D",
  padding: "50px 20px",
  textAlign: "center",
};

const sectionStyle: React.CSSProperties = {
  marginBottom: "40px",
  padding: "20px",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#25274D",
  padding: "20px",
  textAlign: "center",
  color: "#EFEFEF",
};

export default App;
