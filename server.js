"use strict";

var express = require("express")
  , app = express()
  , Compression = require('compression')
  , BodyParser = require('body-parser');

var DEFAULT_PORT = 8088;

/**
 * catch uncaught exceptions
 */
process.on("uncaughtException", function (e) {
  try {
    console.log("Uncaught exception: " + e);
  }
  catch (ex) {
    console.error(ex.stack);
    process.exit();
  }
});

var startTime = Date.now();

/**
 * Initialize the app
 *
 */
var server = require("http").createServer(app);

// config the public directory
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/'));

// gzip compression
app.use(Compression());

// parse the body
app.use(BodyParser.json());
//
app.disable('x-powered-by');

server.listen(DEFAULT_PORT, function () {
  console.log("Web server started in " + (Date.now() - startTime) + "ms on port " + DEFAULT_PORT);
});
