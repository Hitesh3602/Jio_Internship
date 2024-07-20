const app = require('./app')

console.log(app) 


const arr = [1,2,3,4,5,6,7,8,9];

// filter is used to get some specific from the array.
let result = arr.filter((item)=>{
    return item <= 4 
})

console.log(result)


// creating new file viva commands & writing in it
const fs = require('fs')
fs.writeFileSync("hello.txt", "i have created this file viva code")


//create server
const http = require('http')

// this is a method 1 => seperate function banaya hai
function dataControl(req, resp)
{
    resp.write("mera name HITESH hai !");
    resp.end();
}

http.createServer(dataControl).listen(4500);

// this is method 2 => direct method use kar rhe hai hum
http.createServer((req, resp)=>{
    // resp.write("hello this is Hitesh");
    resp.write("<h1>hello this is Hitesh</h1>");
    resp.end();
}).listen(4500);