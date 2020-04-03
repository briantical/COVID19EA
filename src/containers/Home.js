// Native modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Header, AutoSuggest } from "./components";

// Assets
const WHO = require("./../assets/who.png");
const about = require("./../assets/about.png");
const prevention = require("./../assets/prevention.png");
const treatment = require("./../assets/treatment.png");

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content commons_vertical">
          <AutoSuggest />
          <div id="support_information">
            <div className="support_information_div">
              <div>
                <img
                  src={about}
                  alt="About COVID-19"
                  title="About COVID-19"
                  className="support_logos"
                />
              </div>
              <div className="information">
                <div className="info_header">About COVID-19</div>
                <span className="info">
                  An up-to-date rundown of the virus and its symptoms.
                </span>
                <a href="/aboutcovid">Learn more ...</a>
              </div>
            </div>
            <div className="support_information_div">
              <div>
                <img
                  src={prevention}
                  alt="Preventing COVID-19"
                  title="Preventing COVID-19"
                  className="support_logos"
                />
              </div>
              <div className="information">
                <div className="info_header">Prevention</div>
                <span className="info">
                  Information about social distancing, sanitizing, and more.
                </span>
                <a href="/prevention">Learn more ...</a>
              </div>
            </div>
            <div className="support_information_div">
              <div>
                <img
                  src={treatment}
                  alt="Treatment for COVID-19"
                  title="Treatment for COVID-19"
                  className="support_logos"
                />
              </div>
              <div className="information">
                <div className="info_header">Treatment</div>
                <span className="info">
                  Guidance on testing , keeping healthy and treatment
                </span>
                <a href="/treatment">Learn more ...</a>
              </div>
            </div>
          </div>
          <div id="about_website">
            <p>
              This website is a resource to help inform the public, in order to
              guide a response, improve care, and save lives.
            </p>
            <p>COVID19EA</p>
          </div>
        </div>

        <div id="who_logo">
          <img src={WHO} alt="WHO Log" title="Data provided by WHO" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
