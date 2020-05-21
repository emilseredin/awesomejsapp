"use strict";

const http = require("http");
const fs = require("fs");

// the callback function is called on each request
const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    let data = "";
    if (req.url == "/") {
        data = fs.readFileSync("index.html", "utf-8");
        res.end(data);
    } else if (req.url == "/css/main.css") {
        data = fs.readFileSync("./css/main.css", "utf-8");
        res.end(data);
    } else if (req.url == "/images/borlaug.jpg") {
        fs.readFile("./images/borlaug.jpg", (err, data) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, {"Content-Type": "image/jpeg"})
            res.end(data, "base64");
        });
    }
});


//heroku doesn't know anything about port 3000
//use process.env.PORT variable to get access to the port that is specified by heroku
//e.g. PORT=1234 node server.js
server.listen(process.env.PORT || 3000);
// script is running now, and waiting for requests on port 3000
console.log("Server has started!");