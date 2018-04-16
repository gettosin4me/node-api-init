"use strict";

const convict = require("convict");

var config = convict({
  env: {
    format: ["production", "development"],
    default: "development",
    env: "APP_ENV"
  }
});

config.load(require('./server'))
config.load(require('./database'))

module.exports = config;
