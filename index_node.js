// const http=require('http');
import http from 'http';
import { generatePercents } from './features.js';
import fs from 'fs'
import path from 'path';


console.log(path.basename("/home/check/index.html"))
const home=fs.readFileSync("./index.html")

const server=http.createServer((req,res)=>{
    console.log(req.method)
    if(req.url=="/"){
        res.end(`<h1>Home Page ${generatePercents()}</h1>`);
    }
    else if(req.url=="/about"){
        res.end("<h1>About Page</h1>");
    }
    else if(req.url=="/contact"){
        res.end(home);
    }
    else {
        res.end("<h1>Not Found</h1>");
    }
})

server.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})