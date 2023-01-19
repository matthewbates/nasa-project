// WHY WE WANT TO USE MODULES
// 1.) reuse existing code
// 2.) helps organize our code
// 3.) expose only the functionality that will be used by other modules

// http & https modules include a function called get that does the same thing that request does when we are only getting data from the server
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
