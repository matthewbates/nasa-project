// allows you to treat a folder like a module
// when you pass the path to a folder to the require() function, it resolves to the index.js file
// allows you to export functions from many different modules that live in a single folder from a single point that can be referenced using the name/path of that folder

// totally optional

const request = require("./request");
const response = require("./response");

// takes all the properties in our modules and unpacks them
module.exports = {
  ...require("./request"),
  ...require("./response"),
};

// module.exports = {
//   send: request.send,
//   REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
//   read: response.read,
// };
