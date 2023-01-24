const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

// express is basically a fancy listener function for built-in http server
const app = express();

// function that returns the cors middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// only get the planets the first time the page loads
app.use(morgan("combined"));
// parses any incoming json from the body of incoming requests
app.use(express.json());
// serve all of our public files
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
