"use strict";
const fs = require("fs");
const path = require("path");

class BookController {
  loadBook(ucEnv) {
    return JSON.parse(fs.readFileSync(path.join(global.bookLocation, "book.json"),"utf8"));
  }

  loadPage(ucEnv) {
    let dtoIn = ucEnv.getDtoIn();
    let files = fs.readdirSync(path.join(global.bookLocation, "pages"));
    let file = files.find(file=>file.startsWith(dtoIn.code));
    let fileContent = fs.readFileSync(path.join(global.bookLocation,"pages", file),"utf8");
    return JSON.parse(fileContent);
  }
}

module.exports = new BookController();
