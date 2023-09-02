const { log } = require("console");
const fs = require("fs");
const path = require("path");

const pathFile = "notes.json";

//проверка есть ли notes.json и если его нет, то создать его с пустым массивом внутри
if (!fs.existsSync("./notes.json")) {
  fs.writeFile(path.join(__dirname, pathFile), JSON.stringify([]), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("notes created");
  });
}
const [command, title, context] = process.argv.slice(2);

switch (command) {
  // функцию create(), которая создаст новую заметку.
  case "create":
    create(title, context);
    break;
  // функцию list(), которая читает документ notes.json и выводит названия заметок
  case "list":
    list();
    break;
  // view(), которая выводит содержание заметки по её названию.
  case "view":
    view(title);
    break;
  //remove(), которая удаляет заметку по её названию.
  case "remove":
    remove(title);
    break;
  default:
    console.log("you should enter command, title, context");
    break;
}

function create(title, context) {
  const note = { title, context };

  fs.readFile(path.join(__dirname, pathFile), "utf-8", (err, data) => {
    if (err) {
      console.log("create 1", err);
    }
    const notes = JSON.parse(data);
    notes.push(note);
    const json = JSON.stringify(notes);
    console.log(json);
    fs.writeFile(path.join(__dirname, pathFile), json, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("note added");
    });
  });
}

function list() {
  fs.readFile(path.join(__dirname, pathFile), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    const notes = JSON.parse(data);
    console.log(notes.map(({ title }, i) => String(i + 1) + ". " + title).join("\n"));
  });
}

function view(title) {
  fs.readFile(path.join(__dirname, pathFile), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    const notes = JSON.parse(data);
    const note = notes.find((note) => note.title === title);
    if (note) {
      console.log(note.context);
    } else {
      console.log("not note with such title");
    }
  });
}

function remove(title) {
  fs.readFile(path.join(__dirname, pathFile), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    let notes = JSON.parse(data);
    if (notes.find((note) => note.title === title)) {
      notes = notes.filter((note) => note.title !== title);
      const json = JSON.stringify(notes);
      fs.writeFile(path.join(__dirname,pathFile),json,err=>{
        if (err) {
          throw err;
        }
        console.log(`note with title: ${title} removed`);
      });
    } else {
      console.log("don`t find note");
    }
  });
}
