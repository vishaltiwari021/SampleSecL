//here we learn abou the path module of the Node js
//this syntax use in comman js..

const path =  require("path");

console.log(__dirname);
console.log(__filename);

const filepath = path.join("folder","section","text.txt");
console.log(filepath);

const pathparse = path.parse(filepath);
const absolutepath = path.resolve(filepath);
const baseName = path.basename(filepath);
// const delimiter = path.delimiter(filepath);
const extname = path.extname(filepath);

console.log({pathparse,absolutepath,baseName,extname});

//we have many more methods, visit on :https://nodejs.org/download/release/v22.18.0/docs/api/ 


