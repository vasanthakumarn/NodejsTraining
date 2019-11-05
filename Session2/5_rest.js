const http = require("http");
const url = require("url");
const port = 8030;
let posts = [
    { id: 1, title: 'Post 1', descriptions: 'First Post' },
    { id: 2, title: 'Post 2', descriptions: 'Second Post' },
    { id: 3, title: 'Post 3', descriptions: 'Third Post' },
    { id: 4, title: 'Post 4', descriptions: 'Fourth Post' },
];

const server = http.createServer((req, res) => {
    let requestMethod = req.method;
    let routeData = url.parse(req.url, true, false);
    let responseObject = {};

    console.log(req.url);
    console.log(JSON.stringify(routeData));

    switch (requestMethod) {
        case "GET":
            if (req.url === '/listposts') {
                responseObject = {posts};
            } else {
                console.log()
                let postId = routeData.pathname.split('/')[1];
                responseObject = posts.find((post) => post.id === parseInt(postId));
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify(responseObject));
            res.end();
            break;

        case "POST":
            if (req.url === '/addpost') {
                let body = '';
                req.on('data', function (chunk) {
                    body += chunk;
                });

                req.on('end', function () {
                    postBody = JSON.parse(body);
                    posts.push({
                        id: (posts.length+1),
                        title: postBody.title,
                        descriptions: postBody.descriptions
                    });
                    console.log(posts);
                    responseObject = { posts };
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.write(JSON.stringify(responseObject));
                    res.end();
                });
            }
            break;

        case "PUT":
            if (req.url.indexOf('/updatepost/')>-1) {
                let postId = parseInt(req.url.split('/updatepost/')[1]);
                let body = '';
                req.on('data', function (chunk) {
                    body += chunk;
                });

                req.on('end', function () {
                    postBody = JSON.parse(body);
                    let index  = posts.findIndex((post) => post.id === postId);
                    posts[index] = {
                        id: postId,
                        title: postBody.title,
                        descriptions: postBody.descriptions
                    };
                    console.log(posts);
                    responseObject = { posts };
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.write(JSON.stringify(responseObject));
                    res.end();
                });
               
            }
            break;

        default:
            requestType = "NOT LISTED"
            break;
    }

});

server.listen(port);
console.log("Server is listening in Port ", port);