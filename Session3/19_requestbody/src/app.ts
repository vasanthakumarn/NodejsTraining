import express = require("express");
import bodyParser = require("body-parser");

const port: number = 8040;
const app: express.Application = express();

app.use(bodyParser.json()); // used to read json formatted data from request body
app.use(bodyParser.urlencoded({extended: true})); // used to read data from form url-encoded 

app.post("/products", (req:express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.body);
    res.send({result: req.body});
});

app.listen(port, () => console.log("Server is running in Port ", port));