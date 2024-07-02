import { Router } from "express";
import { createRecipe, disabledRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipesController";

const recipesRouter: Router = Router();

recipesRouter.get("/", getRecipes);
recipesRouter.get("/:id", getRecipe);
recipesRouter.post("/schedule", createRecipe);
recipesRouter.put("/:id", updateRecipe);
recipesRouter.put("/:id/state", disabledRecipe);

export default recipesRouter;