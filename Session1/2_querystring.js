const http = require("http");
const url = require("url");
const port = 8070;

const server = http.createServer( (req,res)=> {
    let routeData = url.parse(req.url, true, true);
    let queryParams = routeData.query;

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(`Path Name is ${routeData.pathname}<br/>`);
    res.write(`Product Id is ${queryParams.productId}<br/>`);
    res.write("Product Price is " + queryParams.productPrice);
    res.end();
});

server.listen(port);
console.log("Server is listening in ", port);