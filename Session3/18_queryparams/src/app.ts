import express = require('express');

const app: express.Application = express();
const port: number = 8050;

app.get('/products/:productId/:productPrice', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let productId = req.params.productId;
    let productPrice = req.params.productPrice;
    let responseObject = {
        productId, productPrice
    };

    res.send(JSON.stringify(responseObject));
});

app.listen(port, () => console.log("Server running in Port", port));