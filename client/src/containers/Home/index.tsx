// Native modules
import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { Header, AutoSuggest } from '../components';

import './index.css';
import assets from './../../assets/*.png';

const Home: FC<{}> = () => {
  return (
    <div className="container-fluid no-gutters px-0" style={{ position: 'relative', overflow: 'scroll' }}>
      <Header />
      <div className="content">
        <AutoSuggest />
        <Row noGutters id="support_information" className="commons_horizontal">
          <div className="col-sm support_information_div">
            <img
              src={assets['about']}
              alt="About COVID-19"
              title="About COVID-19"
              className="img-fluid"
              id="support_logos_one"
            />
            <div className="col information">
              <div className="info_header">About COVID-19</div>
              <span className="info">An up-to-date rundown of the virus and its symptoms.</span>
              <a href="/aboutcovid">Learn more ...</a>
            </div>
          </div>
          <div className="col-sm support_information_div">
            <img
              src={assets['prevention']}
              alt="Preventing COVID-19"
              title="Preventing COVID-19"
              className="img-fluid"
              id="support_logos_two"
            />

            <div className="col information">
              <div className="info_header">Prevention</div>
              <span className="info">Information about social distancing, sanitizing, and more.</span>
              <a href="/prevention">Learn more ...</a>
            </div>
          </div>
          <div className="col-sm support_information_div">
            <img
              src={assets['treatment']}
              alt="Treatment for COVID-19"
              title="Treatment for COVID-19"
              className="img-fluid"
              id="support_logo_three"
            />

            <div className="col information">
              <div className="info_header">Treatment</div>
              <span className="info">Guidance on testing, keeping healthy and treatment</span>
              <a href="/treatment">Learn more ...</a>
            </div>
          </div>
        </Row>
        <Row noGutters id="about_website" className="commons_vertical">
          <p>
            This website is a resource to help inform the public, in order to guide a response, improve care, and save
            lives.
          </p>
          <p style={{ fontWeight: 'bold' }}>COVID19EA</p>
        </Row>
      </div>
      <img src={assets['who']} alt="WHO Log" title="Data provided by WHO" className="img-fluid" id="who_logo" />
    </div>
  );
};

export default withRouter(Home);
