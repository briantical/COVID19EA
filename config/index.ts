import pkgdir from 'pkg-dir';
import { config } from 'dotenv';
// // specify a custom path if your file containing environment variables is located elsewhere
declare const process: {
  env: {
    CONSUMER_API_KEY: string;
    CONSUMER_API_SECRET_KEY: string;
    ACCESS_TOKEN: string;
    ACCESS_TOKEN_SECRET: string;
    NODE_ENV: string;
    SERVER_ENDPOINT: string;
  };
};

const root = pkgdir.sync();
config({ path: root + '/.env' });
const envs = {
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  CONSUMER_API_KEY: process.env.CONSUMER_API_KEY,
  CONSUMER_API_SECRET_KEY: process.env.CONSUMER_API_SECRET_KEY,
  SERVER_ENDPOINT: process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://covid19ea.herokuapp.com'
};

export default envs;
