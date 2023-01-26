const { getAllPlanets } = require("../../models/planets.model");

async function httpGetPlanets(req, res) {
  return await res.status(200).json(getAllPlanets());
  // return res.json(planets);
}

module.exports = {
  httpGetPlanets,
};
