import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import { Header } from '../components';
import Canvas from '../components/Canvas';

import './index.css';
import { countries } from './../../constants/data';

const WHO = require('./../../assets/who.png');

interface IReport {
  country: string;
  flag: string;
  cases: number;
  deaths: number;
  recovered: number;
}

interface IReports {
  date: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}

const initialReport: IReport = {
  country: '__',
  flag: '__',
  cases: 0,
  deaths: 0,
  recovered: 0
};

const initialReports: IReports = {
  date: '2019-12-01',
  confirmed: 0,
  deaths: 0,
  recovered: 0
};

const Country: FC<{}> = () => {
  const { country } = useParams();

  const [error, setErrorMessage] = useState('');
  const [tweets, setTweets] = useState<string[]>(['1222968733829865477']);
  const [reports, setCountryReports] = useState<IReports[]>([initialReports]);
  const [report, setCountryReport] = useState<IReport>(initialReport);

  const getTweetsSince = (_country: string) => {
    countries.map((country) => {
      if (country.name === _country) {
        axios
          .get(`http://localhost:4000/api/twitter/?trend=${country.trend}`)
          .then((response) => {
            const {
              data: { tweets: _tweets }
            } = response;
            setTweets(_tweets);
          })
          .catch((error) => {
            setTweets(['1222968733829865477']);
            setErrorMessage(error);
          });
      }
    });
  };

  const getReportByCountry = (country: string) => {
    axios
      .get(`http://localhost:4000/api/covid/country/${country.toLocaleLowerCase()}`)
      .then((response) => {
        const {
          data: { report: _report }
        } = response;
        setCountryReport(_report);
      })
      .catch((error) => setErrorMessage(error));
  };

  const getCountryStatistics = async (country: string) => {
    axios
      .get(`http://localhost:4000/api/covid/statistics/${country}`)
      .then((response) => {
        const {
          data: { reports: _reports }
        } = response;
        setCountryReports(_reports);
      })
      .catch((error) => setErrorMessage(error));
  };

  useEffect(() => {
    getTweetsSince(country);
    getReportByCountry(country);
    getCountryStatistics(country);
  }, [country]);

  const { flag, cases, deaths, recovered } = report;
  return (
    <div className="container-fluid no-gutters px-0" style={{ position: 'relative', overflow: 'scroll' }}>
      <Header />
      <div className="row content no-gutters">
        <div className="col-sm-8">
          <div className="row" style={{ margin: '1rem' }}>
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
                    <img src={flag} title={`${country} flag`} alt={`${country}`} style={{ maxHeight: '2rem' }} />
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
          <Row noGutters id="canvas">
            <Canvas reports={reports} />
          </Row>
        </div>
        <div className="col-sm-4">
          {countries.map((_country, index) => {
            if (_country.name == country) {
              return (
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName={_country.org}
                  options={{ height: 600 }}
                  key={index}
                />
              );
            }
          })}
        </div>
      </div>
      <img src={WHO} alt="WHO Log" title="Data provided by WHO" className="img-fluid" id="who_logo" />
    </div>
  );
};

export default Country;
