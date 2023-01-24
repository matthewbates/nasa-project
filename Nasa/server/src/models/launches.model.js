// works like an object where you map string keys to values
// allow us to map any value to any other value
const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  launchDate: new Date("December 27, 2030"),
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  target: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

// add launches to the launches map using .set()
launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  // set the launch at the key based on the flight number to the launch that we're creating
  launches.set(
    latestFlightNumber,
    // Object.assign(target, ...sources)
    // target: what to apply the sources' properties to, which is returnd after it is modified
    // ...sources: the source object(s) - objects containing the properties you want to apply
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ["Zero to Mastery", "NASA"],
      flightNumber: latestFlightNumber,
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
