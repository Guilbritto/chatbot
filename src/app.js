import express from "express";
import path from "path";
import routes from "./routes";
import cors from "cors";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      "/file",
      express.static(path.resolve(__dirname, "assets", "images"))
    );
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
