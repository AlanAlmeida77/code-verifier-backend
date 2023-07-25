/**
 * Rout router
 * Redirections to routes
 */

import express, {Request, Response } from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '@/utils/logger';

//Server instance
let server = express();

// Router instance 
let rootRouter = express.Router();

// Activate for requests to hhtp//localhost:8000/api

rootRouter.get('/', (req: Request, res: Response) => {
    //Send Hello World
    res.send('Welcome to my API restful: Express + TS + Nodemon + Jest + Swagger + Mongoose');
});