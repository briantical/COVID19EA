import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import assets from './../../assets/*.png';

const Header = () => {
  return (
    <Row noGutters className="align-items-center justify-content-end" id="header">
      <Col></Col>
      <Col className="col-2 commons_vertical">
        <Link to="/resources">Resources</Link>
      </Col>
      <Col className="col-2 commons_vertical">
        <Link to="/support">Support</Link>
      </Col>
      <Col className="col-3 commons_vertical">
        <Link to="/">
          <img
            className="img-fluid"
            src={assets['header_logo']}
            alt="COVID19EA Logo"
            title="COVID19EA Logo"
            id="header_logo"
          />
        </Link>
      </Col>
    </Row>
  );
};
export default Header;
