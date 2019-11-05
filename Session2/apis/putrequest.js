const url = require('url');

let posts = require('./data').data;

module.exports = {
    handlePutRequest: function (req, res) {
        let routeData = url.parse(req.url, true, false);
        let responseObject = {};

        if (req.url.indexOf('/updatepost/') > -1) {
            let postId = parseInt(req.url.split('/updatepost/')[1]);
            let body = '';
            req.on('data', function (chunk) {
                body += chunk;
            });

            req.on('end', function () {
                postBody = JSON.parse(body);
                let index = posts.findIndex((post) => post.id === postId);
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
    }
}