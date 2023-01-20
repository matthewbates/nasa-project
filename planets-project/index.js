const { parse } = require("csv-parse");
// const fs = require("fs");
const fs = require("node:fs");

const habitablePlanets = [];

const isHabitable = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.1 &&
    planet["koi_prad"] < 1.6
  );
};

fs.createReadStream("kepler_data.csv")
  // pipe() is meant to connect a READABLE stream source to a WRITABLE stream destination
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitable(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (err) => {
    console.log(new Error(err));
    // console.log("error");
  })
  .on("end", () => {
    console.log(habitablePlanets.map((planet) => planet["kepler_name"]));
    console.log(`${habitablePlanets.length} habitable planets found!`);
    console.log("done parsing all data from the file");
  });

// parse() returns an EventEmitter that deals with streams of data coming in from that file. Doesn't deal with files directly
// parse();
