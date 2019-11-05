//import express = require("express");
import express, { Request, Response, Application, NextFunction} from "express";

const app: Application = express();
const port: number = 8070;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    let productId = req.query.productId;
    let productPrice  = req.query.productPrice;
    let responseObject = {
        "productId": productId, "productPrice": productPrice
    };

    res.send(JSON.stringify(responseObject));
});

app.get('/products', (req: Request, res: Response, next: NextFunction) => {
    console.log("Path is ", req.path);

    let productId = req.query.productId;
    let productPrice = req.query.productPrice;
    let responseObject = {
        response: {
            productId, productPrice
        }
    };

    res.send(JSON.stringify(responseObject));
});

app.listen(port, () => console.log("Server Started", port));