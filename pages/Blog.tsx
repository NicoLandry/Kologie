import React from "react";

const Blog: React.FC = () => {
  return (
    <div style={pageStyle}>
      <h1>Blog</h1>
      <p>Read our latest updates and insights about leasing.</p>
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

export default Blog;
