import React from "react";

const Contact: React.FC = () => {
  return (
    <div style={pageStyle}>
      <h1>Contact</h1>
      <p>Get in touch with us for any questions or support.</p>
    </div>
  );
};

const pageStyle: React.CSSProperties = {
  padding: "50px 20px",
  textAlign: "center",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  margin: "20px auto",
  maxWidth: "800px",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
};

export default Contact;
