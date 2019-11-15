import { Router } from "express";
import GithubController from "./app/controllers/GithubController";

const routes = new Router();

routes.get("/", GithubController.store);

export default routes;
