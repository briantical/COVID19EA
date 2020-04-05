import React, { Component } from "react";
import { connect } from "react-redux";

// im"covid19-api";

import { Header } from "./components";
const WHO = require("./../assets/who.png");

const vovid = require("covid19-api");

export class Country extends Component {
  getCountryData = () => {
    // let {
    //   match: {
    //     params: { country },
    //   },
    // } = this.props;
    // fetch("https://pomber.github.io/covid19/timeseries.json")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     data[country].forEach(({ date, confirmed, recovered, deaths }) =>
    //       console.log(
    //         `${date} Confirmed cases : ${confirmed}  Recovered cases : ${recovered} Deaths : ${deaths}`
    //       )
    //     );
    //   });
    // covidapi.getReportsByCountries([country.toLowerCase()]);
    // getReports();
  };

  render() {
    let {
      match: {
        params: { country },
      },
    } = this.props;

    this.getCountryData();

    return (
      <div className="container-fluid no-gutters px-0">
        <Header />
        <div className="content commons_vertical">Country Data : {country}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Country);
