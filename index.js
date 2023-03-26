//import your http module
const http = require("http");

// create server with http
const server = http.createServer((req, res) => {
  console.log("server is created");
});

// initiate port
const port = 4000;

// listen to server
server.listen(port, () => console.log(`server is running on port ${port}`));
