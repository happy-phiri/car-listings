import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer container">
        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
