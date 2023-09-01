const path = require("path");
const fs = require("fs");

function create(title, content) {
  fs.readFile('notes.json', (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    const arr=[];
    arr.push(notes);
    arr.push({ title, content });
    const json = JSON.stringify(...arr);

    fs.writeFile('notes.json', json, (error) => {
      if (error) return console.error(error.message);
      console.log('Заметка создана');
    });
  });
}
// function list() {
//   fs.readFile(path.join(__dirname, "notes.json"), "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
// }
create("note1", "i`d like to become a programmer");

//list();
