// Напишите программу, которая просит у пользователя ввести два числа, складывает эти числа, если запускается с флагом -s, или перемножает, если запускается с флагом -m, после чего завершает свою работу. Для ввода и вывода информации используйте стандартные потоки ввода/вывода. Пример работы (пользовательский ввод начинается с >)

// > node test.js -m
// Введите 2 числа
// > 2 7
// 2 * 7 = 14
// > node test.js -s
// Введите 2 числа
// > 2 7
// 2 + 7 = 9

const { stdin, stdout } = process;

stdout.write("please, enter two digits\n");

stdin.on("data", (data) => {
  if (process.argv.includes("-m")) {
    const arr = Buffer.from(data, "utf-8").toString().split(" ");
    const str=String(data);
    console.log(str.length);
    console.log(str.split(' ').map(x=>+x));
    stdout.write(`${arr[0]*arr[1]}`);
    process.exit();
  }
  if (process.argv.includes("-s")) {
    const arr = Buffer.from(data, "utf-8").toString().split(" ");
    stdout.write(`${+arr[0]+(+arr[1])}`);
    process.exit();
  }
  else{
    stdout.write(`you forgot write flags: -m or -s`);
    process.exit();
  }
});
