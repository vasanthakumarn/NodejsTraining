import { Request, Response } from "express";
import Post from './../model/post';

export let allposts = (req: Request, res: Response) => {
    console.log("/posts GET");
    Post.find((err: any, posts: any) => {
        if (err) {
            res.send("Error!");
        } else {
            res.send(posts);
        }
    });
};

export let getpost = (req: Request, res: Response) => {
    console.log("/posts/:postId GET");
    let postId = req.params.postId;
    Post.findById(postId, (err: any, post: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(post);
        }
    });
};

export let addpost = (req: Request, res: Response) => {
    console.log("/addpost called");
    var post = new Post(req.body);

    post.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(post);
        }
    });

};

export let updatepost = (req: Request, res: Response) => {
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
};

export let deletepost = (req: Request, res: Response) => {
    console.log("/deletepost called");
    Post.deleteOne({ _id: req.params.postId }, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Successfully Deleted Post");
        }
    });
};

