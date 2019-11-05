import express, {Request, Response, NextFunction, Application} from "express";

const app:Application = express();
const port: number = 7080;
app.set('view engine', 'pug'); //pug is one of a template engine supported in express js

app.get('/', (req: Request, res: Response, next: NextFunction) => {
   res.render('index', {title: "Render HTML Pages - Home", message: "Home Page!"});
    //res.render('index.html');
});

app.get('/aboutus', (req: Request, res: Response, next: NextFunction) => {
    res.render('index', { title: "Render HTML Pages - About Us", message: "About Us Page!" });
});

app.listen(port, () => console.log("Server is listening in Port ", port));