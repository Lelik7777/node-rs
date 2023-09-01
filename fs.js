const { log, error } = require("console");
const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "notes"), (error) => {
  if (error) {
    throw error;
  }
});

fs.writeFile(path.join(__dirname, "notes", "text.txt"), "hello world", (err) => {
  if (err) {
    throw err;
  }
});
fs.appendFile(path.join(__dirname, "notes", "text.txt"), "\nadd some information", (err) => {
  if (err) {
    throw err;
  }
});

fs.readFile(path.join(__dirname, "notes", "text.txt"), "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
fs.rename(path.join(__dirname, "notes", "text.txt"), path.join(__dirname, "notes", "new.txt"), (err) => {
  if (err) {
    throw err;
  }
});
