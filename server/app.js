import express from 'express';
import { config } from './config';
import { fetchData } from './SixtApi';

const app = express();
const port = process.env.PORT || config.PORT

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/offers', (req, res) => {
  fetchData()
  .then(offers => res.send(offers))
});
