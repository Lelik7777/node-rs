const fs = require("fs");
const path = require("path");


  if(!fs.existsSync('./notes.json')){
    fs.writeFile(path.join(__dirname,"notes.json"), JSON.stringify([]), (err) => {
      if (err) {
        console.log(err);
      }
      console.log("notes created");
    });
  }
const [command, title, context] = process.argv.slice(2);

switch (command) {
  case "create":
    create(title, context);
    break;
  case "list":
    list(title);
    break;
  case "view":
    view(title);
    break;
  case "remove":
    remove(title);
    break;
  default:
    console.log("you should enter command, title, context");
    break;
}

function init() {
  fs.access(path.join('./notes.json'), fs.F_OK, (err) => {
    if (err) {
      fs.writeFile(path.join(__dirname,"notes.json"), JSON.stringify([]), (err) => {
        if (err) {
          console.log(err);
        }
        console.log("notes created");
      });
    }
  });
}
function create(title, context) {

  const note = { title, context };

  fs.readFile(path.join(__dirname,"notes.json"), "utf-8", (err, data) => {
    if (err) {
      console.log("create 1", err);
    }
    const notes = JSON.parse(data);
    notes.push(note);
    const json = JSON.stringify(notes);
    console.log(json);
    fs.writeFile(path.join(__dirname,"notes.json"), json, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("note added");
    });
  });
}
