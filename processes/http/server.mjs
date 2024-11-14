import http from  "node:http";

const server = http.createServer( (req, res) => {
    console.log("RQ.url: ", req.url ?? "no url");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello NodeJS!');

});

const port = 3000;

server.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
});


//Express
//KOA
//Fastly 