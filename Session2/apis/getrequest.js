const url = require('url');
let posts = require('./data').data;

module.exports = {
    handleGetRequest: function(req, res){
        let requestMethod = req.method;
        let routeData = url.parse(req.url, true, false);
        let responseObject = {};

        if(req.url === '/listposts') {
            responseObject = { posts };
        } else {
            let postId = routeData.pathname.split('/')[1];
            responseObject = posts.filter((post) => post.id === parseInt(postId));
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(responseObject));
        res.end();
    }
}