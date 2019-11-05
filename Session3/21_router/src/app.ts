import express, {Request, Response, Application, Router, NextFunction}   from "express";

const app: Application = express();
const port: number = 8020;
const router: any = express.Router();

//ROUTER.ALL 
router.all("*", (req: Request, res: Response, next: NextFunction) => {
    console.log("This end point handler will be called for ALL END POINTS!");
    //DO ANY AUTHENTICATION / ADDING SOME INFORMATION TO THE REQUEST OBJECT
    req.query.userId = "User10";
    next();
});

//ROUTER.METHOD
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log(req.query);
    res.send(req.query);
});


//ROUTER.ROUTE()
router.route("/greetings")
.get((req: Request, res: Response, next: NextFunction) => {
    res.send("Greetings from Route: /greetings for GET User "+ req.query.userId);
})
.post((req: Request, res: Response, next: NextFunction) => {
    res.send("Greetings from Route: /greetings for POST User " + req.query.userId);
});

//ROUTER.PARAM
router.param('id', (req: Request, res: Response, next: NextFunction) => {
    console.log('This is called when route gets value for id');
    next();
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params.id);
    console.log(req.query);
    res.send(req.params.id);
});

app.use("/", router);
app.use("/user", router);

app.listen(port, () => console.log("App is running in Port ", port));