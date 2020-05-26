import { Router } from 'express';
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
  let { country } = req.params;
  country = country.toLocaleLowerCase();
  getReportsByCountries(country)
    .then((data: any) => res.json({ data }))
    .catch((error: any) => {
      res.status(500).json({ error });
      Logger.error(error);
    });
});

export default covid_routes;
