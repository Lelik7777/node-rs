const fs = require("fs");
const path=require('path');

const [command, title, content] = process.argv.slice(2);
switch (command) {
  case "create":
    create(title, content);
    break;
  case "list":
    list();
    break;
  case "view":
    view(title);
    break;
  case "remove":
    remove(title);
    break;
  default:
    break;
}
function init(){
fs.access('notes.json',fs.F_OK,err=>{
  if(err) {
    const json=JSON.stringify([]);
    fs.writeFile(path.join(__dirname,'notes.json'),json,err=>{
      if (err) {
        throw err;
      }
    })
  }
  return;
})
}
init();
// function create(title, content) {
//   fs.readFile('notes.json', (error, data) => {
//     if (error) return console.error(error.message);
//     const notes = JSON.parse(data);
//     Array.from(notes).push({ title, content });
//     const json = JSON.stringify(notes);

//     fs.writeFile('notes.json', json, (error) => {
//       if (error) return console.error(error.message);
//       console.log('Заметка создана');
//     });
//   });
// }
