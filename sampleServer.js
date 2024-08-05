const http = require('http')

const server = http.createServer((req, res) => {

    const user = {
        firstName: "John",
        lastName: "Doe",
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(user));
});

server.listen(3000, () => {
    console.log("server running on port 3000");
})
