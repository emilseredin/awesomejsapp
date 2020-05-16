"use strict";

const http = require("http");
const fs = require("fs");

// the callback function is called on each request
const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    let data = "";
    if (req.url == "/") {
        data = fs.readFileSync("index.html", "utf-8");
    } else if (req.url == "/style.css") {
        data = fs.readFileSync("style.css", "utf-8");
    }
    res.end(data);
});


//heroku doesn't know anything about port 3000
//use process.env.PORT variable to get access to the port that is specified by heroku
//e.g. PORT=1234 node server.js
server.listen(process.env.PORT);
// script is running now, and waiting for requests on port 3000
console.log("Server has started!");