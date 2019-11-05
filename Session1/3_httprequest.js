const http = require("http");
const port = 8060;

const server = http.createServer((req, res) => {
    let requestMethod = req.method;
    let requestType = '';
    let responseObject = {};

    switch (requestMethod) {
        case "GET":
            requestType = "HTTP GET";
            break;

        case "POST":
            requestType = "HTTP POST";
            break;
        
        case "PUT":
            requestType = "HTTP PUT";
            break;
    
        default:
            requestType = "NOT LISTED"
            break;
    }

    responseObject = {
        repsonse: "Received a " + requestType + " Request for admin page!"
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(responseObject));
    res.end();
});

server.listen(port);
console.log("Server is listening in Port ", port);