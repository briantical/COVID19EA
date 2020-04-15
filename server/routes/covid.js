const { Router } = require('express');
const covid19Api = require('covid19-api');

const covidRoutes = Router();

covidRoutes.get('/deaths', (req, res) => {
  const countries = covid19Api.getDeaths();
  res.json({ countries });
});

covidRoutes.get('/country/:country', (req, res) => {
  let { country } = req.params;
  country = country.toLocaleLowerCase();
  covid19Api
    .getReportsByCountries(country)
    .then((data) => res.json({ data }))
    .catch((error) => res.status(500).json({ error }));
});

module.exports = covidRoutes;
