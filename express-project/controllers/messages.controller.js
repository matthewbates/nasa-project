const path = require("path"); // /folder/files.jpg

function getMessages(req, res) {
  // __dirname is a variable in global built-ins to get the name of the foler where the current file lives
  res.sendFile(
    path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  );
  // res.send("<ul><li>Hello Albert!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
