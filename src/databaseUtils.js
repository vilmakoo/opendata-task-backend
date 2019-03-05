const Event = require('./models/event');

const saveEvent = async (data) => {
  const time = data.time;

  const events = await getEvents();
  if (events.map(e => e.date).includes(time)) {
    return 'event already saved';
  }

  const event = new Event({ data: data });
  await event.save();
  console.log('event saved:', data);
  return event;
};

const getEvents = async () => {
  const events = await Event.find({});
  return events;
};

module.exports = { saveEvent, getEvents };