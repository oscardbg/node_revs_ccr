const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

/**
 * Initialization
 */
const server = express();

/**
 * Settings
 */
server.set("port", process.env.PORT || 3000);
server.set("views", path.join(__dirname, "views"));
server.engine(
   "hbs",
   exphbs({
      extname: "hbs",
      defaultLayout: "main",
      layoutsDir: path.join(server.get("views"), "layouts"),
      partialsDir: path.join(server.get("views"), "partials"),
   })
);
server.set("view engine", "hbs");

/**
 * Middlewares
 */
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

/**
 * Global Variables
 */

/**
 * Routes
 */
server.use(require("./routes/index.route"));
server.use("/tiendas", require("./routes/reviews.routes"));

/**
 * Static Files
 */
server.use(express.static(path.join(__dirname, "public")));

module.exports = server;
