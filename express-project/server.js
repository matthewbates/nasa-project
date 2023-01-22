const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

// we set up our application using the express function that's exported from the express package
const app = express();

const PORT = 3000;

// register middleware with express
app.use((req, res, next) => {
  const start = Date.now();
  next();
  // total amount of ms between when the req came in and res is sent back
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

// returns a piece of middleware that looks at the content type and sets the req.body to an object
app.use(express.json());

// call app.use() so that express knows to match requests to the routes that are contained within that router
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
