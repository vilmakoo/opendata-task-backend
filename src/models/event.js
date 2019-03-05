const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to MongoDB');
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });

const eventSchema = new mongoose.Schema({
  data: {
    date: Date,
    sensor1: Number,
    sensor2: Number,
    sensor3: Number,
    sensor4: Number
  }
});

eventSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Event', eventSchema);