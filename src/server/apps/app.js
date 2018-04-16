"use strict";

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const config = require("./../../config");
const routes = require('./../../http/routes')
const providers = require('./../../providers')

module.exports = () => {
  let app = express();

  //initialise bodyParser
  app.use(bodyParser.urlencoded({extended: true}));

  // bootstrap routes
  providers.routes.boot(app, {config, routes})

  //start server and log the port on console
  app.listen(config.get("server.app.port"), started);

  return app;
};

/**
 * Called when server is started...
 * Displays information on the console
 */
function started() {
    console.log(
      [
        "---------------------------",
        "Server Running",
        "---------------------------",
        "Port: " + config.get("server.app.port"),
        "---------------------------"
      ].join("\r\n")
    );
  }
