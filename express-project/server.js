const express = require("express");

// we set up our application using the express function that's exported from the express package
const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Albert Einstein",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
];

// register middleware with express
app.use((req, res, next) => {
  const start = Date.now();
  // we need to call next() to ensure that express passes the requeest to the correct handler
  next();
  // total amount of ms between when the req came in and res is sent back
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

// returns a piece of middleware that looks at the content type and sets the req.body to an object
app.use(express.json());

// POST a new friend
app.post("/friends", (req, res) => {
  // if the name property doesn't exist, set a 400 error status
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }

  const newFriend = {
    // take the name of the new friend from the req.body parameter
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);
  res.json(newFriend);
});

// GET all friends
app.get("/friends", (req, res) => {
  // to be more explicit that we're sending JSON, use res.json(). Works just like res.send()
  res.json(friends);
});

// GET a particular friend
app.get("/friends/:id", (req, res) => {
  // takes the parameter name we pass in the route and populates a property on the params object
  const id = Number(req.params.id);
  // validate values we aren't completely in control of
  const friend = friends[id];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
