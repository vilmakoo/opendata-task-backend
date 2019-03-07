const DataPoint = require('./models/dataPoint');

const saveDataPoint = async (data) => {
  const time = new Date(data.date);

  const dataPoints = await getDataPoints();
  const eventTimes = dataPoints.map(e => e.data.date).filter(d => d.getTime() === time.getTime());
  if (eventTimes.length > 0) {
    console.log('data point already saved');
    return 'data point already saved';
  }

  const dataPoint = new DataPoint({ data: data });
  await dataPoint.save();
  console.log('data point saved:', data);
  return dataPoint;
};

const getDataPoints = async () => {
  const dataPoints = await DataPoint.find({});
  return dataPoints;
};

module.exports = { saveDataPoint, getDataPoints };