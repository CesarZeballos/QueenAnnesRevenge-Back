import { Router } from "express";
import recipesRouter from "./recipesRouter";
import "reflect-metadata"

const router: Router = Router();

router.use("/recipes", recipesRouter);

export default router