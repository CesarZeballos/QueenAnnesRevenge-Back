import { Router } from "express";
import recipesRouter from "./recipesRouter";

const router: Router = Router();

router.use("/recipes", recipesRouter);

export default router