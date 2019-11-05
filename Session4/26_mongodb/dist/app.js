"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 8030;
var posts = [
    { id: 1, title: 'Post 1', descriptions: 'First Post' },
    { id: 2, title: 'Post 2', descriptions: 'Second Post' },
    { id: 3, title: 'Post 3', descriptions: 'Third Post' },
    { id: 4, title: 'Post 4', descriptions: 'Fourth Post' },
];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/posts', function (req, res, next) {
    console.log("/posts GET");
    res.send({ posts: posts });
});
app.get('/posts/:postId', function (req, res, next) {
    console.log("/posts/:postId GET");
    var postId = req.params.postId;
    var responseObject = posts.find(function (post) { return post.id === parseInt(postId); });
    res.send({ responseObject: responseObject });
});
app.post('/posts', function (req, res, next) {
    console.log("/addpost called");
    posts.push({
        id: (posts.length + 1),
        title: req.body.title,
        descriptions: req.body.descriptions
    });
    res.send({ posts: posts });
});
app.put('/posts/:postId', function (req, res, next) {
    console.log("/updatepost called");
    var postBody = req.body;
    var postId = parseInt(req.params.postId);
    var index = posts.findIndex(function (post) { return post.id === postId; });
    posts[index] = {
        id: postId,
        title: postBody.title,
        descriptions: postBody.descriptions
    };
    res.send({ posts: posts });
});
app.listen(port, function () { return console.log("Application is running in Port ", port); });
