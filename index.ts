import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'; 

//configuration the .env file
dotenv.config();

// Create Express App
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the first route of the App
app.get('/',(req: Request, res: Response) =>{
    // Send hello world
    res.send('welcome to the API Restful: Express + TS + Swagger + mongoose')
});

// Define the first route of the App
app.get('/hello',(req: Request, res: Response) =>{
    // Send hello world
    res.send('welcome to GET route')
});

//Execute the App and listen the port
app.listen(port, () => {
    console.log(`Express server: running at http://localhost:${port}`)
})

