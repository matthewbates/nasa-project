const http = require("http");
const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

// if there's not a port specified in env (undefined), it goes to the default 8000
const PORT = process.env.PORT || 8000;

// any middleware/route handlers attached to app will respond to requests coming into the server
const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();
}
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

startServer();
