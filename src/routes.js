import { Router } from "express";
import GithubController from "./app/controllers/GithubController";
import ImageController from "./app/controllers/ImageController";

const routes = new Router();

routes.get("/avatar/:avatar", ImageController.show);
routes.get("/:repo/:numberRepo*?", GithubController.show);

export default routes;
