const http = require("http");

const getModule = require('./apis/getrequest');
const postModule = require('./apis/postrequest');
const putModule = require('./apis/putrequest');

const port = 8020;

const server = http.createServer((req, res) => {
    
    switch (req.method) {
        case "GET":
            getModule.handleGetRequest(req, res);
            break;

        case "POST":
            postModule.handlePostRequest(req, res);
            break;

        case "PUT":
            putModule.handlePutRequest(req, res);
            break;

        default:
            requestType = "NOT LISTED";
            break;
    }

});

server.listen(port);
console.log("Server is listening in Port ", port);