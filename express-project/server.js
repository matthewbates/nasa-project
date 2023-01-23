const express = require("express");
const path = require("path");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

// we set up our application using the express function that's exported from the express package
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 3000;

// register middleware with express
app.use((req, res, next) => {
  const start = Date.now();
  next();
  // total amount of ms between when the req came in and res is sent back
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
// returns a piece of middleware that looks at the content type and sets the req.body to an object
app.use(express.json());

// call app.use() so that express knows to match requests to the routes that are contained within that router
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);
app.get("/", (req, res) => {
  res.render("index.hbs", {
    title: "My Friends Are Very Clever",
    caption: "Let's go skiing!",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
