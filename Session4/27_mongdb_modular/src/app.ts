import express = require("express"); 
import bodyParser = require('body-parser');
import * as postController from "./controllers/post-controller";

const app: express.Application = express();
const port: number = 8020;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/posts', postController.allposts);
app.get('/posts/:postId', postController.getpost);
app.post('/posts', postController.addpost);
app.put('/posts/:postId', postController.updatepost);
app.delete('/posts/:postId', postController.deletepost);

app.listen(port, () => console.log("Application is running in Port ", port));
