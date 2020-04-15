const { Router } = require("express");
const covid19_api = require("covid19-api");

const covid_routes = Router();

covid_routes.get("/deaths", (req, res) => {
  let countries = covid19_api.getDeaths();
  res.json({ countries });
});

covid_routes.get("/country/:country", (req, res) => {
  let { country } = req.params;
  country = country.toLocaleLowerCase();
  covid19_api
    .getReportsByCountries(country)
    .then((data) => res.json({ data }))
    .catch((error) => res.status(500).json({ error }));
});

module.exports = covid_routes;
