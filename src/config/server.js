"use strict";

exports.server = {
  app: {
    ip: process.env.APP_IP || "127.0.0.1",
    port: process.env.APP_PORT || 4000,
    domain: process.env.APP_DOMAIN || "localhost"
  }
};
