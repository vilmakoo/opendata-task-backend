const axios = require('axios');
const databaseUtils = require('./databaseUtils');

const fetchData = () => {
  const dataPoint = axios.get('https://opendata.hopefully.works/api/events/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    }
  })
    .then(async response => {
      return await databaseUtils.saveDataPoint(response.data);
    })
    .catch(error => {
      console.log(error);
      return 'an error happened while fetching data';
    });

  return dataPoint;
};

module.exports = { fetchData };