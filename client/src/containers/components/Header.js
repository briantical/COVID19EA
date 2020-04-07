import React from "react";
const logo = require("../../assets/header_logo.png");

const Header = () => {
  return (
    <div className="row align-items-center justify-content-end" id="header">
      <a href="/resources">Resources</a>
      <a href="/support">Support</a>
      <img
        className="img-fluid"
        src={logo}
        alt="COVID19EA Logo"
        title="COVID19EA Logo"
        id="header_logo"
      />
    </div>
  );
};
export default Header;
