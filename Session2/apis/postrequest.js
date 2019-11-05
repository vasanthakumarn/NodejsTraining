const url = require('url');

let posts = require('./data').data;

module.exports = {
    handlePostRequest: function (req, res) {
        let requestMethod = req.method;
        let routeData = url.parse(req.url, true, false);
        let responseObject = {};

        if (req.url === '/addpost') {
            let body = '';
            req.on('data', function (chunk) {
                body += chunk;
            });

            req.on('end', function () {
                postBody = JSON.parse(body);
                posts.push({
                    id: (posts.length + 1),
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
    }
}