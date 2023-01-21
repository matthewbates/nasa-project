const http = require("node:http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 0,
    name: "Nikola Tesla",
  },
  {
    id: 1,
    name: "Sir Issac Newton",
  },
  {
    id: 2,
    name: "Albert Einstein",
  },
];

// both req is a READABLE stream and res is a WRITABLE stream
server.on("request", (req, res) => {
  // /friends/2 => ["", "friends", "2"]
  const items = req.url.split("/");
  // receiving data in a POST request that we can listen to by handling the data event from the req object
  if (req.method === "POST" && items[1] === "friends") {
    // received as a buffer that is then converted to a string
    req.on("data", (data) => {
      const friend = String(data);
      console.log("Request:", friend);
      // JSON.parse() converts the string back to an object
      friends.push(JSON.parse(friend));
    });
    // we can pipe() what's being read from the readable stream to the writable stream
    // pipe() the request AFTER we register the listener for the data event but not after the data has already come in
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application.json");
    // if the exact length is 3, send the stringified version of friends at a specific index
    if (items.length === 3) {
      // items needs to be converted to an integer since .split() creates strings
      const friendIndex = Number(items[2]);
      // res.end() needs to be called on each req
      // res.end() expects a string to be passed in
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      // handle requests to /friends without an additional parameter
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === "GET" && items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Issac!</li>");
    res.write("<li>What are your thoughts on astronomy?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
}); // 127.0.0.1 => localhost
