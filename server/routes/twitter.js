const { Router } = require('express');
const Twit = require('twit');

// Configuration for twit
const Twitter = new Twit({
  consumer_key: process.env.CONSUMER_API_KEY,
  consumer_secret: process.env.CONSUMER_API_SECRET_KEY,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true // optional - requires SSL certificates to be valid.
});

const twitterRoutes = Router();

twitterRoutes.get('/', (req, res) => {
  let tweets = [];
  // Get the date one week back
  const date = new Date(Date.now() - 604800000);
  const tweetDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const { trend = 'coronavirus' } = req.query;

  //   Get 20 the tweets about #trend in the past week
  Twitter.get(
    'search/tweets',
    { q: `#${trend} since:${tweetDate}`, count: 20 },
    (error, data, response) => {
      if (error && response == null) {
        res.status(500).json({ error });
      } else {
        const { statuses } = data;
        statuses.map((status) => {
          const { id_str } = status;
          tweets = [...tweets, id_str];
          return null;
        });
        res.json({ tweets });
      }
    }
  );
});

module.exports = twitterRoutes;
