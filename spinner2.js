const spinnerArray = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let timer = 100;

for (let item of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(`\r ${item}`);
  }, timer);
  timer += 200;
};