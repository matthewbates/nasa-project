const { getAllPlanets } = require("../../models/planets.model");

function httpGetPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
  // return res.json(planets);
}

module.exports = {
  httpGetPlanets,
};
