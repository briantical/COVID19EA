const { Router } = require("express");
const { getReports, getReportsByCountries } = require("covid19-api");

const covid_routes = Router();

covid_routes.get("/", async (req, res) => {
  getReports()
    .then((data) => res.json({ data }))
    .catch((error) => res.status(500).json({ error }));
});

covid_routes.get("/country/:country", (req, res) => {
  let { country } = req.params;
  country = country.toLocaleLowerCase();
  getReportsByCountries(country)
    .then((data) => res.json({ data }))
    .catch((error) => res.status(500).json({ error }));
});

module.exports = covid_routes;
