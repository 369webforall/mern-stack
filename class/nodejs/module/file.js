const fs = require('fs');

// sync...
// console.log('1');
// fs.writeFileSync('./test.txt', 'Hello world, from nodejs');

// console.log('2');

// fs.writeFile('./apple.txt', 'this is async system', (err) => {
//   console.log(err);
// });

console.log('3');

fs.readFile('./apple.txt', 'utf-8', (err, result) => {
  console.log(result);
});

// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);

// fs.mkdirSync('my-folder');

fs.unlinkSync('./test.txt');
