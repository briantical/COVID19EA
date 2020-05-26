import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
// specify a custom path if your file containing environment variables is located elsewhere
config({ path: './../.env' });

import api from './routes';
import { Logger } from './../utils';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Include CORS security feature in server
app.use(function (_req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', api);

app.listen(PORT, () => {
  Logger.success(`Covid19ea Server is listening on PORT ${PORT}`);
});
