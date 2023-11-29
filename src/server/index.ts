import express, { Express, Request, Response } from "express";

// Security
import cors from 'cors';
import helmet from 'helmet';

// TODO HTTPS

// Root Router

import rootRuter from '../routes';


//Create express app
const server: Express = express();


// Define server to use "/api" and use RootRouter
// http://localhost:8000/api/...
server.use(
    '/api',
    rootRuter
);

// Static server
server.use(express.static('public'));

//TODO moongose conecction

//Security config
server.use(helmet());
server.use(cors());

// Content type config
server.use(express.urlencoded({extended: true, limit: '50mb'}));
server.use(express.json({limit: '50mb'}));

// http://localhost:8000/ --> http://localhost:8000/api/
// * Redirecting config
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
});

export default server;

