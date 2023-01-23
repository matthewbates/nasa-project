const express = require("express");
const cors = require("cors");
const planetsRouter = require("./routes/planets/planets.router");

// express is basically a fancy listener function for built-in http server
const app = express();

// parses any incoming json from the body of incoming requests
// gets checked for the json content type if we are passing in some data
app.use(express.json());
// function that returns the cors middleware
// only accept requests from localhost:3000 (client)
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/", planetsRouter);

module.exports = app;
