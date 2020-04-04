import React from "react";
const logo = require("./../../assets/header_logo.png");

const Header = () => {
  return (
    <div className="row align-items-center" id="header">
      <div className="col-8"></div>
      <div className="col justify-content-end">
        <a href="/resources">Resources</a>
      </div>
      <div className="col justify-content-end">
        <a href="/support">Support</a>
      </div>
      <div className="col justify-content-end">
        <img
          className="img-fluid"
          src={logo}
          alt="COVID19EA Logo"
          title="COVID19EA Logo"
          id="header_logo"
        />
      </div>
    </div>
  );
};
export default Header;
