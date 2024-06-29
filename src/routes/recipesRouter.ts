import { Router } from "express";
import { getRecipes } from "../controllers/recipesController";

const recipesRouter: Router = Router();

recipesRouter.get("/", getRecipes);
// recipesRouter.get("/:id", getRecipe);
// recipesRouter.post("/", createRecipe);
// recipesRouter.put("/:id", updateRecipe);
// recipesRouter.put("/:id/delete", deleteRecipe);

export default recipesRouter;