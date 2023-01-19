// http and https modules include a convienence function called get that does the same thing that request does when we are only getting data from the server
const { get } = require("https");

get("https://www.google.com", (res) => {
  // res passed in as a callback is the result of making the request that we specified
  res.on("data", (chunk) => {
    // a chunk is a piece of data that's not necessarily the whole of the response
    console.log(`Data chunk: ${chunk}`);
  });
  // use end when there's no more data coming in from the request. Doesn't have any parameters
  res.on("end", () => {
    console.log("No more data");
  });
});
