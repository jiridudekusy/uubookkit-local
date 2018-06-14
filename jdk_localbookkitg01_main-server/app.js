#!/usr/bin/env node

const {AppServer} = require("uu_appg01_core-appserver");

const commandLineArgs = require("command-line-args");
const commandLineUsage = require("command-line-usage");

const optionDefinitions = [
  {
    name: "book",
    alias: "b",
    type: String,
    typeLabel: "{underline dir}",
    description: "Absolute path to the directory with exported book."
  },
  {
    name: "help",
    alias: "h",
    type: Boolean,
    description: "displays this usage guide."
  },
];
const sections = [
  {
    header: "uuBookKit-local",
    content: "Starts local bookit using data exported by uubookkit-exporter."
  },
  {
    header: "Synopsis",
    content: [
      "$ uubookkit-local {bold --book} {underline dir}",
      "$ uubookkit-local {bold --help}"
    ]
  },
  {
    header: "Options",
    optionList: optionDefinitions
  }
];
const usage = commandLineUsage(sections);
const options = commandLineArgs(optionDefinitions);

const valid = options.help || (options.book);
if (!valid || options.help) {
  console.log(usage);
  process.exit();
}

global.bookLocation = options.book;
console.log(global.bookLocation);

AppServer.startServer();
