const http = require("http");
const url = require("url");

const server = http.createServer((req,res) => {

    const reqUrl = req.url;
    console.log(url.parse(reqUrl,true).query.title)
    console.log(req.url);
    res.end();
})

server.listen(8080);
