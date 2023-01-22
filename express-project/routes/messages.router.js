const express = require("express");
const messagesController = require("../controllers/messages.controller");

const messagesRouter = express.Router();

messagesRouter.use((req, res, next) => {
  console.log("ip address:", req.ip);
  next();
});
// GET all messages
messagesRouter.get("/", messagesController.getMessages);
// POST a new message
messagesRouter.post("/", messagesController.postMessage);

module.exports = messagesRouter;
