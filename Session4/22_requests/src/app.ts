import express, {Request, Response, Application, NextFunction} from "express";
import bodyParser from "body-parser";

const app: Application = express();
const port: number = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/posts/:postId/request", (req, res) => {
    console.log("req.originalUrl", req.originalUrl);
    console.log("req.baseUrl", req.baseUrl);
    console.log("req.path", req.path);
    console.log("req.hostname", req.hostname);
    console.log("req.ip", req.ip);
    console.log("req.method", req.method);
    console.log("req.path", req.path);
    console.log("req.protocol", req.protocol);
    console.log("req.params", req.params);
    console.log("req.query", req.method);
    console.log("req.body", req.body);
    res.send("Received Post Request");
});

app.listen(port, () => console.log("Server is running on port", port));