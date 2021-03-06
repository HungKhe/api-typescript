import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import  Routes  from './routes/routes';

class App {
    public app: Application;
    constructor(){
        this.app = express();
        this.middleware();
        this.routers();
    }
    private middleware(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(morgan('combined'));
        this.app.use(cors());
        dotenv.config();
    }
    private routers(): void {
        this.app.get("/", (req, res, next) => {
            res.send("Typescript App works!!");
        });
        // user route
        this.app.use("/api/v1", Routes);
        // handle undefined routes
        this.app.use("*", (req, res, next) => {
            res.send({
                status: "Page not found!!!"
            });
        });
    }
}
export default new App().app;