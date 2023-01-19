const axios = require("axios");

// each .then() or .catch() returns their own promise which, when it resolves, allows the next callback in the chain to be executed
axios
  .get("https://www.google.com")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log("All done!");
  })
  .finally();
