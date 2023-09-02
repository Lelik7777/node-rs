const fs = require("fs");
const path = require("path");
const pathNotes = "newNotes.json";
const error = (err) => {
  if (err) {
    throw err;
  }
};

class Notes {
  constructor([command, title, context]) {
    this.command = command;
    this.title = title;
    this.context = context;
    this.switch(this.command);
  }
  switch(command) {
    switch (command) {
      case "create":
        this.create(this.title, this.context);
        break;
      case "list":
        this.list();
        break;
      // view(), которая выводит содержание заметки по её названию.
      case "view":
        this.view(this.title);
        break;
      //remove(), которая удаляет заметку по её названию.
      case "remove":
        this.remove(this.title);
        break;
      default:
        console.log("enter command title context");
    }
  }
  init() {
    fs.writeFileSync(pathNotes, JSON.stringify([]), error);
  }

  create(title, context) {
    fs.access(pathNotes, fs.constants.F_OK, (err) => {
      if (err) {
        this.init();
      }
      fs.readFile(pathNotes, (err, data) => {
        if (err) {
          throw err;
        }

        const notes = JSON.parse(data);
        notes.push({ title, context });
        fs.writeFile(pathNotes, JSON.stringify(notes), error);
      });
    });
  }
  list() {
    fs.readFile(pathNotes, (err, data) => {
      fs.access(pathNotes, fs.constants.F_OK, (err) => {
        if (err) {
          this.init();
        }
        fs.readFile(pathNotes, (err, data) => {
          if (err) {
            throw err;
          }

          const notes = JSON.parse(data);
          if (notes.length > 0) {
            console.log(notes.map(({ title }, i) => `${i + 1} ${title}`).join("\n"));
          } else {
            console.log("add notes");
          }
        });
      });
    });
  }
  view(title) {
    fs.readFile(pathNotes, (err, data) => {
      if (err) {
        console.log("not note");
        return;
      }
      const notes = JSON.parse(data);
      console.log(notes.find((note) => (note.title = title)).context);
    });
  }
  remove(title) {
    fs.readFile(pathNotes, (err, data) => {
      if (err) {
        console.log("file do not find");
        return;
      }
      let notes = JSON.parse(data);
      notes = notes.filter((note) => note.title !== title);
      fs.writeFile(pathNotes, JSON.stringify(notes), error);
    });
  }
}

new Notes(process.argv.slice(2));
