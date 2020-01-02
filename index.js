const http = require('http');
let counter = 0;
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':"text/plain"
    })
    if (req.url !== '/favicon.ico') {
        counter += 1;
    }
    res.end(String(counter));
})

server.listen(3003, () => {
    console.log(`listening on port 3003`);
})