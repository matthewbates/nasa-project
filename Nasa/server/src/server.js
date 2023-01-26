const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

// if there's not a port specified in env (undefined), it goes to the default 8000
const PORT = process.env.PORT || 8000;

// create a const for mongo url
MONGO_URL =
  "mongodb+srv://nasa-api:dXmGEpVCyKNWeyqj@nasacluster.1tpolrk.mongodb.net/nasa?retryWrites=true&w=majority";

// any middleware/route handlers attached to app will respond to requests coming into the server
const server = http.createServer(app);

// EventEmitter that emits events when the connection is ready
// open even will only get triggered once
mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  // want to connect to mongo before our server starts listening
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
}
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

startServer();
