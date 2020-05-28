import React from 'react';
import { Row, Col } from 'react-bootstrap';
const logo = require('./../../assets/header_logo.png');

const Header = () => {
  return (
    <Row noGutters className="align-items-center justify-content-end" id="header">
      <Col></Col>
      <Col className="col-2 commons_vertical">
        <a href="/resources">Resources</a>
      </Col>
      <Col className="col-2 commons_vertical">
        <a href="/support">Support</a>
      </Col>
      <Col className="col-3 commons_vertical">
        <img className="img-fluid" src={logo} alt="COVID19EA Logo" title="COVID19EA Logo" id="header_logo" />
      </Col>
    </Row>
  );
};
export default Header;
