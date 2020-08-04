import express, { Express } from 'express';
import cors from 'cors';

import routes from './routes';

class App {
  public app: Express;

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(routes);
  }
}

export default new App().app;
