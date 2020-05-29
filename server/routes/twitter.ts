import { Router } from 'express';
import Twit from 'twit';

import { Logger } from './../../utils';

declare const process: {
  env: {
    CONSUMER_API_KEY: string;
    CONSUMER_API_SECRET_KEY: string;
    ACCESS_TOKEN: string;
    ACCESS_TOKEN_SECRET: string;
  };
};

// Configuration for twit
const Twitter = new Twit({
  consumer_key: process.env.CONSUMER_API_KEY,
  consumer_secret: process.env.CONSUMER_API_SECRET_KEY,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true // optional - requires SSL certificates to be valid.
});

const twitter_routes = Router();

twitter_routes.get('/', (req, res) => {
  let tweets: string[] = [];
  //Get the date one week back
  let date = new Date(Date.now() - 604800000);
  let _date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  let { trend = 'coronavirus' } = req.query;

  // Get 20 the tweets about #trend in the past week
  Twitter.get('search/tweets', { q: `#${trend} since:${_date}`, count: 20 }, (error: any, data: any) => {
    if (error) {
      Logger.error(error);
      res.status(500).json({ error });
    } else {
      let { statuses } = data;
      statuses.map((status: any) => {
        let { id_str } = status;
        tweets = [...tweets, id_str];
      });
      res.json({ tweets });
    }
  });
});

export default twitter_routes;
