const { send, read } = require("./internals");
// const { send } = require("./internals/request");
// const { read } = require("./internals/response");
// import { send } from "./internals/request.js";
// import { read } from "./internals/response.js";

// make a request against a server to get data
function makeRequest(url, data) {
  //
  send(url, data);
  // invoking the read() function we imported
  return read();
}

const responseData = makeRequest("https://google.com", "hello");
console.log(responseData);
