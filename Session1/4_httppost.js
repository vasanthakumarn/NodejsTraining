const http = require("http");
const port = 8050;

const server = http.createServer((req, res) => {
    let responseObject = {};
    let postBody= {};
    let body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {
        postBody = JSON.parse(body);
        responseObject = {
            "text": "Post Request Value is  " + postBody.productId
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(responseObject));
    });
    
});

server.listen(port);
console.log("Server is listening in Port ", port);