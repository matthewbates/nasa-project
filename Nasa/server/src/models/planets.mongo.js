const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

// connects planetSchema with the "planets" collection
// first argument should always be the singular name of the collection that the model represents. Mongoose then takes what you pass in, lowercase it, make it plural, and talk to the colleciton with that lowercase, pluralized name
module.exports = mongoose.model("Planet", planetSchema);
