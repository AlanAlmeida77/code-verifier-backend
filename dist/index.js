"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//configuration the .env file
dotenv_1.default.config();
// Create Express App
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define the first route of the App
app.get('/', (req, res) => {
    // Send hello world
    res.send('welcome to the API Restful: Express + TS + Swagger + mongoose');
});
// Define the first route of the App
app.get('/hello', (req, res) => {
    // Send hello world
    res.send('welcome to GET route');
});
//Execute the App and listen the port
app.listen(port, () => {
    console.log(`Express server: running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map