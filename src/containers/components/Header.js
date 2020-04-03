import React from "react";
const logo = require("./../../assets/header_logo.png");

const Header = () => {
  return (
    <header>
      <a href="/resources">Resources</a>
      <a href="/support">Support</a>
      <img
        src={logo}
        alt="COVID19EA Logo"
        title="COVID19EA Logo"
        id="header_logo"
      />
    </header>
  );
};
export default Header;
