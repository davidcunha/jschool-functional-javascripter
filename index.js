#!/usr/bin/env node

"use strict";

var Workshopper = require("workshopper");
var path = require("path");

Workshopper({
  name: "jschool-functional-javascripter",
  appDir: __dirname,
  languages: ["en", "fr", "ko"],
});
