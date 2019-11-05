import express, {Request, Response, Application, NextFunction} from 'express';
import * as bodyParser from "body-parser";

const fs = require("fs"); 

const app: Application = express();
const router: any = express.Router();
const port: number = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//BUILT-IN MIDDLEWARES
express.static('file-path');
express.json();
express.urlencoded({ extended: true});
//ERROR HANDLING MIDDLEWARES

app.get('/', (req, res, next) => {
    console.log('Hello World!');
    fs.readFile('/maybe-valid-file', 'utf-8', (err: Error, data: any) => {
        if(err)
            next(err);
        res.locals.data = data
    });
    //throw new Error('BROKEN');
    //res.send('Hello World!');
});


//ROUTER LEVEL MIDDLEWARES
/*router.use( (req: Request, res: Response, next: NextFunction) => {
    console.log('Router Level Middleware');
    next();
});
app.use('/', router);*/

//APPLICATION LEVEL MIDDLEWARES
/*app.use('/', (req: Request, res: Response, next: NextFunction) => {
    console.log("Request received at ", new Date());
    res.send("New Hello World!");
    next();
});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log("Route / is accessed");
    res.send("Hello World!");
});*/

app.listen(port, () => console.log("Server is listening in Port ", port));