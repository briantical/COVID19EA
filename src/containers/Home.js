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
      <div
        className="container-fluid no-gutters px-0"
        style={{ position: "relative", overflow: "scroll" }}
      >
        <Header />
        <div className="content commons_vertical">
          <AutoSuggest />
          <div id="support_information" className="row">
            <div className="col-sm support_information_div">
              <img
                src={about}
                alt="About COVID-19"
                title="About COVID-19"
                className="img-fluid"
                id="support_logos_one"
              />
              <div className="col information">
                <div className="info_header">About COVID-19</div>
                <span className="info">
                  An up-to-date rundown of the virus and its symptoms.
                </span>
                <a href="/aboutcovid">Learn more ...</a>
              </div>
            </div>
            <div className="col-sm support_information_div">
              <img
                src={prevention}
                alt="Preventing COVID-19"
                title="Preventing COVID-19"
                className="img-fluid"
                id="support_logos_two"
              />

              <div className="col information">
                <div className="info_header">Prevention</div>
                <span className="info">
                  Information about social distancing, sanitizing, and more.
                </span>
                <a href="/prevention">Learn more ...</a>
              </div>
            </div>
            <div className="col-sm support_information_div">
              <img
                src={treatment}
                alt="Treatment for COVID-19"
                title="Treatment for COVID-19"
                className="img-fluid"
                id="support_logo_three"
              />

              <div className="col information">
                <div className="info_header">Treatment</div>
                <span className="info">
                  Guidance on testing , keeping healthy and treatment
                </span>
                <a href="/treatment">Learn more ...</a>
              </div>
            </div>
          </div>
          <div
            className="row align-items-center justify-content-center row-cols-1"
            id="about_website"
          >
            <div className="col align-items-center">
              This website is a resource to help inform the public, in order to
              guide a response, improve care, and save lives.
            </div>
            <div className="col align-items-center ">COVID19EA</div>
          </div>
        </div>
        <img
          src={WHO}
          alt="WHO Log"
          title="Data provided by WHO"
          className="img-fluid"
          id="who_logo"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
