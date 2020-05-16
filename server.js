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

server.listen(3000);
// script is running now, and waiting for requests on port 3000
console.log("Server has started!");