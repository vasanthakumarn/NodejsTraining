import express = require("express");
import bodyParser = require('body-parser');

const app: express.Application = express();
const port: number = 8030;
const posts: any[] = [
    { id: 1, title: 'Post 1', descriptions: 'First Post' },
    { id: 2, title: 'Post 2', descriptions: 'Second Post' },
    { id: 3, title: 'Post 3', descriptions: 'Third Post' },
    { id: 4, title: 'Post 4', descriptions: 'Fourth Post' },
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/posts', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("/posts GET");
    res.send({posts});
});

app.get('/posts/:postId', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("/posts/:postId GET");
    let postId = req.params.postId;
    let responseObject = posts.find((post) => post.id === parseInt(postId));

    res.send({ responseObject });
});

app.post('/posts', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("/addpost called");
    posts.push({
        id: (posts.length + 1),
        title: req.body.title,
        descriptions: req.body.descriptions
    });
    res.send({ posts });
});

app.put('/posts/:postId', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("/updatepost called");
    let postBody = req.body;
    let postId = parseInt(req.params.postId);
    let index = posts.findIndex((post) => post.id === postId);

    posts[index] = {
        id: postId,
        title: postBody.title,
        descriptions: postBody.descriptions
    };
    res.send({ posts });
});

app.listen(port, () => console.log("Application is running in Port ", port));

