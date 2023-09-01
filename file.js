console.log("path", __dirname);
console.log(__filename);

// Напишите программу, которая возвращает путь к папке, если запускается с флагом '-d', или путь к файлу, если запускается с флагом '-f'. Если файл запускается без флага или с флагом, отличным от указанных в задании, выводится предложение запустить программу с флагом '-d' или '-f'.

const { stdin, stdout } = process;

  if (process.argv.includes("-d")) {
    stdout.write(`path to directory is ${__dirname}`);
  }
  if (process.argv.includes("-f")) {
    stdout.write(`path to file is ${__filename}`);
  } else {
    stdout.write("you need to run with flag -d or -f");
  }
  process.exit();
