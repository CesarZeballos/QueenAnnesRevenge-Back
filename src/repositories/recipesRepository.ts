import { AppDataSource } from "../config/data-source";
import { Recipes } from "../entities/Recipes";

const RecipesRepository = AppDataSource.getRepository(Recipes)

export default RecipesRepository