import { Router } from "express";
import Controller from "../controllers/controller";
const routes = Router();
routes.get("/", Controller.getAll);

export default routes;
