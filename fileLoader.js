const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/a_example.txt`, 'utf-8');
const arrayed = data.split('\n').map(item => {
  let line = item
    .replace('\n', '')
    .split(/\s/g)
    .map(el => parseInt(el));
  return line;
});

const inputTemplater = fileArr => {
  const libraries = [];
  for (let tracker = 2; tracker < fileArr.length; tracker += 2) {
    let myLib = {};
    myLib.bksDysCapacity = fileArr[tracker];
    myLib.myBksIds = fileArr[tracker + 1];
    libraries.push(myLib);
  }
  libraries.pop();
  return {
    bksLibsDys: fileArr[0],
    bksIds: fileArr[1],
    libraries
  }
};
inputTemplater(arrayed);
console.log(inputTemplater(arrayed));
