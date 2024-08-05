const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // const user = {
    //     firstName: "John",
    //     lastName: "Doe",
    // }
    const name = "hisham"

    res.writeHead(200, {'Content-Type': 'text/html'});
    let html = fs.readFileSync("./sample.html", "utf-8");
    html = html.replace("{{name}}", name)
    res.end(html);
});

server.listen(3000, () => {
    console.log("server running on port 3000");
})
