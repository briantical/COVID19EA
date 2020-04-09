import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import MyChart from "./components/_Chart";
import { TwitterTweetEmbed } from "react-twitter-embed";
import twitter from "./../utils/twitter";

import { Header } from "./components";
import {
  setCountryReport,
  setCountryReports,
  setCountryTweets,
  setErrorMessage,
} from "./../actions";

import { countries } from "./../constants/data";

const WHO = require("./../assets/who.png");

export class Country extends Component {
  constructor(props) {
    super(props);
    let {
      match: {
        params: { country },
      },
    } = this.props;

    let trend = countries.filter((_country) => _country.name == country)[0]
      .trend;

    this.getReportByCountry(country.toLowerCase());
    this.getReportsByCountry(country);
    this.getCountryTweets(trend);
  }

  getReportByCountry = async (country) => {
    try {
      let country_report = await axios.get(
        `https://covid19-server.chrismichael.now.sh/api/v1/ReportsByCountries/${country.toLowerCase()}`
      );
      let {
        data: { report },
      } = country_report;
      this.props.setCountryReport(report);
    } catch (error) {
      this.props.setErrorMessage(error);
    }
  };

  getReportsByCountry = async (country) => {
    try {
      let country_reports = await axios.get(
        `https://pomber.github.io/covid19/timeseries.json`
      );
      let {
        data: { [country]: reports },
      } = country_reports;

      this.props.setCountryReports(reports);
    } catch (error) {
      console.log(error);
      this.props.setErrorMessage(error);
    }
  };

  getTweetsSince = async (keyword, period) => {
    try {
      await twitter.get(
        "search/tweets",
        { q: keyword + " since:" + period, count: 100 },
        function (err, data, response) {
          return data;
        }
      );
    } catch (error) {
      return error;
    }
  };

  getCountryTweets = async (trend) => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_SERVER}twitter/?trend=${trend}`
      );
      let {
        data: { tweets },
      } = response;
      this.props.setCountryTweets(tweets);
    } catch (error) {
      this.props.setErrorMessage(error);
    }
  };

  render() {
    let {
      report: {
        country = "__",
        flag,
        cases = "__",
        deaths = "__",
        recovered = "__",
      },
      tweets,
    } = this.props;

    return (
      <div
        className="container-fluid no-gutters px-0"
        style={{ position: "relative", overflow: "scroll" }}
      >
        <Header />
        <div className="row content no-gutters">
          <div className="col-sm-8">
            <div className="row" style={{ margin: "0rem 1rem" }}>
              <table className="table table-hover table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th colSpan={2}>Country statistics</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Country</td>
                    <td>
                      <img
                        src={flag}
                        title={`${country} flag`}
                        alt={`${country}`}
                        className="img-fluid"
                        style={{ height: "2rem" }}
                      />
                      {`(${country})`}
                    </td>
                  </tr>
                  <tr>
                    <td>Confirmed cases</td>
                    <td>{cases}</td>
                  </tr>
                  <tr>
                    <td>Deaths</td>
                    <td>{deaths}</td>
                  </tr>
                  <tr>
                    <td>Recovered</td>
                    <td>{recovered}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <MyChart />
            </div>
          </div>
          <div className="col-sm-4">
            {tweets.map((tweet, index) => {
              return <TwitterTweetEmbed tweetId={tweet} key={index} />;
            })}
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

const mapStateToProps = (state) => {
  let { report, reports, error, tweets } = state;
  return { report, reports, error, tweets };
};

const mapDispatchToProps = {
  setCountryReport,
  setCountryReports,
  setErrorMessage,
  setCountryTweets,
};

export default connect(mapStateToProps, mapDispatchToProps)(Country);
