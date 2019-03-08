require('dotenv').config();
const express = require('express');
var cors = require('cors');
var CronJob = require('cron').CronJob;
const databaseUtils = require('./databaseUtils');
const dataService = require('./dataService');

const job = new CronJob('0 1 * * * *', async () => {
  const d = new Date();
  const dataPoint = await dataService.fetchData();
  console.log('new data fetched at:', d);
});
console.log('After job instantiation');
job.start();

const app = express();
app.use(express.static('build'));
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/api/fetch_new_data', async (req, res) => {
  const dataPoint = await dataService.fetchData();
  res.send(dataPoint);
});

app.get('/api/get_data_points', async (req, res) => {
  const dataPoints = await databaseUtils.getDataPoints();
  res.send(dataPoints);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));