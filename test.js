console.log("hello world");
console.log("Hello, Node.js!");

//Напишите программу, которая спрашивает у пользователя его имя, после ввода имени приветствует его, указывая имя, а затем прекращает свою работу и прощается с пользователем.
// const { stdin, stdout } = process;

// stdout.write(`hello!
// what is your name?
// `);
// stdin.on("data", (data) => {
//   stdout.write(`Hi,${data}`);
//   process.exit();
// });

// process.on("exit", (code) => {
//   if (code === 0) {
//     stdout.write("Good bye!");
//   } else {
//     stdout.write("something went wrong");
//   }
// });

const { stdin, stdout } = process;

stdin.on("data", (data) => {
  stdout.write("message in upper case: ");
  stdout.write(data.toString().toUpperCase());
  process.exit();
});
process.on("exit", (code) => {
  if (code === 0) {
    stdout.write("bye");
  } else {
    stdout.write(`error: ${code}
    `);
  }
});


