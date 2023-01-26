const mongoose = require("mongoose");

// create a new schema object and pass in the definition of the schema as an object
const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  customers: [String],
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
});

// connects launchesSchema with the "launches" collection
// first argument should always be the singular name of the collection that the model represents. Mongoose then takes what you pass in, lowercase it, make it plural, and talk to the colleciton with that lowercase, pluralized name
module.exports = mongoose.model("Launch", launchesSchema);
