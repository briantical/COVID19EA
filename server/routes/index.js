const { Router } = require("express");
const router = Router();

const twitter_routes = require("./twitter");
const covid_routes = require("./covid");

router.use("/twitter", twitter_routes);

router.use("/covid", covid_routes);

module.exports = router;
