require('dotenv').config();
const express = require('express');
const axios = require('axios');
var cors = require('cors');
const databaseUtils = require('./databaseUtils');

const app = express();
app.use(express.static('build'));
app.use(cors());
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/api/fetch_new_data', (req, res) => {
  axios.get('https://opendata.hopefully.works/api/events/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    }
  })
    .then(async (response) => {
      const event = await databaseUtils.saveEvent(response.data);
      res.send(event);
    })
    .catch((error) => console.log(error));
});

app.get('/api/get_events', async (req, res) => {
  const events = await databaseUtils.getEvents();
  res.send(events);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));