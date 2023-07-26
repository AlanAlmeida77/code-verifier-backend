/**
 * Rout router
 * Redirections to routes
 */

import express, {Request, Response } from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/logger';

//Server instance
let server = express();

// Router instance 
let rootRouter = express.Router();

// Activate for requests to hhtp//localhost:8000/api

// GET: htttp://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:8000/api/')
    //Send Hello World
    res.send('Welcome to my API restful: Express + TS + Nodemon + Jest + Swagger + Mongoose');
});

// Redirections to Routers & controllers
server.use('/', rootRouter); //htttp://localhost:8000/api/
server.use('/hello', helloRouter) //htttp://localhost:8000/api/hello
// Add more routes to the app

export default server;