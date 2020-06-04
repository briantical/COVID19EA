import { Router } from 'express';
import axios from 'axios';
import { getReports, getReportsByCountries } from 'covid19-api';

import { Logger } from './../../utils';

const covid_routes = Router();

covid_routes.get('/', async (_req, res) => {
  getReports()
    .then((data: any) => res.json({ data }))
    .catch((error: any) => {
      res.status(500).json({ error });
      Logger.error(error);
    });
});

covid_routes.get('/country/:country', (req, res) => {
  let { country: _country } = req.params;
  _country = _country.toLocaleLowerCase();
  getReportsByCountries(_country)
    .then((data: any) => {
      const { country, flag, cases, deaths, recovered } = data[0][0];
      const report = { country, flag, cases, deaths, recovered };
      res.json({ report });
    })
    .catch((error: any) => {
      res.status(500).json({ error });
      Logger.error(error);
    });
});

covid_routes.get('/statistics/:country', async (req, res) => {
  let { country } = req.params;
  try {
    const country_reports = await axios.get(`https://pomber.github.io/covid19/timeseries.json`);
    let {
      data: { [country]: reports }
    } = country_reports;
    res.json({ reports });
  } catch (error) {
    res.status(500).json({ error });
    Logger.error(error);
  }
});

export default covid_routes;
