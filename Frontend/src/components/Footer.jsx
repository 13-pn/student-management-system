import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.bottomText}>
          © {new Date().getFullYear()} Student Management System • Built with React & Node.js
        </p>

        <p style={styles.smallText}>
          Developed by Pvn
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: "10px 10px",
    background: "green",
    color: "#fff",
    textAlign: "center",
  },

  container: {
    maxWidth: "900px",
    margin: "auto",
  },

  bottomText: {
    fontSize: "14px",
    marginBottom: "5px",
  },

  smallText: {
    fontSize: "12px",
    opacity: 0.9,
  },
};

export default Footer;