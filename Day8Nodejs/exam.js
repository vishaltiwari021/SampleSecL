/*const path = require('path')

//console.log(process.env.PATH.split(path.delimiter));
console.log(path.dirname('/foo/bar/baz/asdf/quux'));
console.log(path.extname('index.html'));
const k = path.format({
  dir: 'C:\\path\\dir',
  base: 'file.txt',
});
console.log(k);
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));
console.log(path.parse('C:\\path\\dir\\file.txt'));
console.log(path.resolve());
*/

//console.log(process.argv);

/*
const k  = Number(process.argv[2]);
const m  = Number(process.argv[3]);
const l  = Number(process.argv[4]);
console.log(k+m);
console.log(m*l);
console.log(l+m);

*/

const http = require('http');

const server = http.createServer((req,res)=>{
  const reqURL = req.url;
  

  if(reqURL === '/'){
    res.end("home page")
  }
  if(reqURL === '/about'){
    res.end("about page")
  }
  if(reqURL === '/contact'){
    res.end("contact page")
  }
})

server.listen(3000,()=>{
  console.log(`server i srunnin on port number ${3000}`);
  
})




