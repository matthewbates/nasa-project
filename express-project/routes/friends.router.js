const express = require("express");
const friendsController = require("../controllers/friends.controller");
// a router is like a mini application that contains its own set of middleware and routes. use a router to break down an application and make it more modular
const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("ip address:", req.ip);
  next();
});

// POST a new friend
friendsRouter.post("/", friendsController.postFriend);
// GET all friends
friendsRouter.get("/", friendsController.getFriends);
// GET a particular friend
friendsRouter.get("/:id", friendsController.getFriend);

module.exports = friendsRouter;
