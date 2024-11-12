import http from  "node:http";

const server = http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello NodeJS!');
});

const port = 3000;

server.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
});
