import express = require("express");
import bodyParser = require('body-parser');
import Post from "./model/post";

const app: express.Application = express();
const port: number = 8030;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/posts', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("/posts GET");
    Post.find((err: any, posts: any) => {
        if (err) {
            res.send("Error!");
        } else {
            res.send(posts);
        }
    });
});

app.get('/posts/:postId', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("/posts/:postId GET");
    let postId = req.params.postId;
    Post.findById(postId, (err: any, post: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(post);
        }
    });

});

app.post('/posts', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("/addpost called");
    var post = new Post(req.body);

    post.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(post);
        }
    });
    
});

app.put('/posts/:postId', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("/updatepost called");
    console.log(req.body);
    Post.findByIdAndUpdate(
        req.params.postId,
        req.body,
        (err: any, post: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Successfully updated post!");
            }
        }
    );
});

app.delete('/posts/:postId', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("/deletepost called");
    Post.deleteOne({ _id: req.params.postId }, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Successfully Deleted Post");
        }
    });
});


app.listen(port, () => console.log("Application is running in Port ", port));
