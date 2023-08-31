//Напишите программу, которая спрашивает у пользователя его имя, после ввода имени возвращает указанное пользователем имя наоборот и прекращает работу.

const {stdin,stdout}=process;
stdout.write('what is your name?\n');
stdin.on('data',data=>{
  stdout.write(data.toString().split('').reverse().join(''))
  process.exit();
})
process.on('exit',code=>{
  if(code!==0)
  stdout.write(`error code ${code}`)
})