const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':"text/plain"
    })
    
    res.end('stuff');
})

server.listen(3003, () => {
    console.log(`listening on port 3003`);
})