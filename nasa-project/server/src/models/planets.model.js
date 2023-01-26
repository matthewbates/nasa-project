const path = require("path");
const fs = require("node:fs");
const { parse } = require("csv-parse");

const habitablePlanets = [];

const isHabitable = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.1 &&
    planet["koi_prad"] < 1.6
  );
};

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitable(data)) {
          habitablePlanets.push(data);
          resolve();
        }
      })
      .on("error", (err) => {
        console.log(new Error(err));
        reject(err);
      })
      .on("end", () => {
        console.log(`${habitablePlanets.length} habitable planets found!`);
      });
  });
}

module.exports = {
  loadPlanetsData,
  planets: habitablePlanets,
};
