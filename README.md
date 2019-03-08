This is an app that, when running, fetched a new data point from an API provided by Eficode, saves it to a database and visualizes the data on a chart. The backend is built with Node.js + Express and it uses a MongoDB database. The [frontend](http://github.com/vilmakoo/opendata-task-frontend) is a React app.

The app is deployed to [heroku](https://eficode-opendata-task.herokuapp.com/). Please note that the heroku app goes idle after 30 minutes of inactivity.
The app is also pushed to [docker hub](https://hub.docker.com/r/vilmakoo/eficode-opendata-task-backend).