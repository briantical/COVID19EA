const { Router } = require('express');

const router = Router();
const twitterRoutes = require('./twitter');
const covidRoutes = require('./covid');

router.use('/twitter', twitterRoutes);

router.use('/covid', covidRoutes);

module.exports = router;
