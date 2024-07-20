// how to use a simple external wala package.
const colors = require('colors');
console.log("hitesh".green);

// API ke through hum data fetch karenge
// fetech data from 1 seperate file. (data.js)
const http = require('http');
const data = require('./data.js');

http.createServer((req, resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(3000);
