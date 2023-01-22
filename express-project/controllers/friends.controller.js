const model = require("../models/friends.model");

function postFriend(req, res) {
  // if the name property doesn't exist, set a 400 error status
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }

  const newFriend = {
    // take the name of the new friend from the req.body parameter
    id: model.length,
    name: req.body.name,
  };
  model.push(newFriend);
  res.json(newFriend);
  // res.send(newFriend);
}

function getFriends(req, res) {
  // to be more explicit that we're sending JSON, use res.json(). Works just like res.send()
  res.json(model);
  // res.send(model);
}

function getFriend(req, res) {
  // takes the parameter name we pass in the route and populates a property on the params object
  const id = Number(req.params.id);
  // validate values we aren't completely in control of
  const friend = model[id];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};
