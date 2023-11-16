/* const http=require('http');
const fs=require('fs');

 const server=http.createServer();
 server.on('request',(req,res)=>{
 const src=fs.createReadStream('./image.jpg');
     src.pipe(res);
}).listen(3000);  */



// correct  //

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'image.jpg'), (error, data) => {
        res.end(data);
    });
}).listen(3000);

/* const http = require('http');
const fs = require('fs');
const path = require('path');


const url="";

if(url==='/image.jpg'){
    http.createServer((req, res) => {
        fs.readFile(path.join(__dirname, 'index.html'), (error, data) => {
            res.end(data);
        });
    }).listen(3000);
}else{

} */



