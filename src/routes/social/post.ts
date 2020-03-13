import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { socialController } from '../../controller/socialController'

export class PostSocial {
    public socialController: socialController = new socialController();
    public routes(app: Application): void{
        app.route("/post-social")
        .get(this.socialController.onGetListPostSocial)
    }
}