import mongoose = require("mongoose");

const uri: string = "mongodb://127.0.0.1:27017/post";

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Successfully Connected!");
    }
});

export interface IPost extends mongoose.Document {
    title: string;
    descriptions: string;
}

export const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    descriptions: { type: String, required: true }
});

const Post = mongoose.model<IPost>("Post", PostSchema);
export default Post;
