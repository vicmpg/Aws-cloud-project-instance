const http = require ("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello world!");
});

const PORT = process.env.PORT || 5000; 

server.listen(PORT, () => console.log("Server is running on port 5000"));