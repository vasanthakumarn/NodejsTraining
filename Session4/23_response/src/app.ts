import express, {Request, Response, Application, NextFunction} from "express";


const app: Application = express();

const port: number = 7090;

app.get('/', (req: Request, res: Response, next:NextFunction) => {
    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']); //Appends the specified value to the HTTP response header field.
    res.setHeader("Content-Type", "image/png"); //Set's the header
    res.setHeader("Content-Dispositon", "attachment; filename=" + "nodejs.png");
    res.download('nodejs.png'); //Download's the image to the Client
});

app.get('/end', (req: Request, res: Response, next: NextFunction) => {
    res.end('Success'); //Send & Ends the connection
});

app.get('/json', (req: Request, res: Response, next: NextFunction) => {
    res.json({result:'Success'}); //Send the result as a JSON object
});

app.get('/redirect', (req: Request, res: Response, next: NextFunction) => {
    res.redirect('http://google.com'); //Send the result as a JSON object
});


app.post('/format', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers["accept"]); //based on the request header accept - it responds with suitable value
    res.format({
        'text/plain': function () {
            res.send('hey');
            console.log(res.get('Content-Type')); //returns the type of content served in response
        },

        'text/html': function () {
            res.send('<h1><b>hey</b></h1>');
            console.log(res.get('Content-Type'));
        },

        'application/json': function () {
            res.send({ message: 'hey' });
            console.log(res.get('Content-Type'));
        },

        'default': function () {
            // log the request and respond with 406
            res.status(406).send('Not Acceptable');
        }
    })

});

app.listen(port, () => console.log("Server is running in Port ", port));