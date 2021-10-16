const express = require("express");

const server = express();

server.set("port", 3002);
server.listen(server.get("port"), () =>
   console.log("Listening on port: ", server.get("port"))
);
