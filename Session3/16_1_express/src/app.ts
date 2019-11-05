import express = require("express");
//import express, { Request, Response, Application, NextFunction} from "express";

const app: express.Application = express();
const port: number = 8080;

app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send('Hi World!');
});

app.listen(port, () => console.log("Server Started", port));