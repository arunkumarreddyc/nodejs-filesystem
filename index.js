const http = require("http");
const PORT = 7000;
const fs = require("fs");

var dt = require("./modules");
fs.writeFileSync("./filesystem/date-time.txt", dt.datetime());

//lets create a server
http
  .createServer((req, res) => {
    fs.readFile("./filesystem/date-time.txt", (err, data) => {
      res.writeHeader(200, { "Content-Type": "text/html" });
      const result = dt.datetime();
      res.write("Current date and time ");
      res.write(result);
      res.end();
    });
  })
  .listen(PORT, () => {
    console.log("server is listening to ", PORT);
  });
