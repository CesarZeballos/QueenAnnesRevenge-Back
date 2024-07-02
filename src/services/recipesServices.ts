import { AppDataSource } from "../config/data-source";
import { Recipes, RecipeState } from "../entities/Recipes";
import { IRecipe } from "../interfaces/IRecipes";
import { RecipeDto } from "../interfaces/RecipesDto";

export const getRecipesServices = async () => {
    try {
        const recipes: IRecipe[] = await AppDataSource.getRepository(Recipes).find()
        return recipes
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getRecipeByIdServices = async (id: number) => {
    try {
        const recipe: IRecipe | null = await AppDataSource.getRepository(Recipes).findOneBy({id})
        return recipe
    } catch (error: any) {
        throw new Error(error)
    }
}

export const createRecipeServices = async (recipeData: RecipeDto) => {
    try {
        const newRecipe: Recipes = await AppDataSource.getRepository(Recipes).create({
            name: recipeData.name,
            nickname: recipeData.nickname,
            vape: recipeData.vape,
            macerated: recipeData.macerated,
            abvMacerated: recipeData.abvMacerated,
            time: recipeData.time,
            abvGin: recipeData.abvGin,
            state: RecipeState.active
        })
        const results = await AppDataSource.getRepository(Recipes).save(newRecipe)
        return results
    } catch (error: any) {
        throw new Error(error)
    }
}
export const updateRecipeServices = async (id:number, recipeData: RecipeDto) => {
    try {
        const recipe = await AppDataSource.getRepository(Recipes).findOneBy({id})
        if (!recipe) throw new Error("Recipe not found")
        AppDataSource.getRepository(Recipes).merge(recipe, {
            name: recipeData.name,
            nickname: recipeData.nickname,
            vape: recipeData.vape,
            macerated: recipeData.macerated,
            abvMacerated: recipeData.abvMacerated,
            time: recipeData.time,
            abvGin: recipeData.abvGin,
            state: RecipeState.active
        })
        const results = await AppDataSource.getRepository(Recipes).save(recipe)
        return results
    } catch (error: any) {
        throw new Error(error)
    }
}

export const disabledRecipeServices = async (id: number) => {
    try {
        const recipe = await AppDataSource.getRepository(Recipes).findOneBy({id})
        if (!recipe) throw new Error("Recipe not found")
        if (recipe.state === RecipeState.active) {
            AppDataSource.getRepository(Recipes).merge(recipe, {
                state: RecipeState.disabled
            })
        } else {
            AppDataSource.getRepository(Recipes).merge(recipe, {
                state: RecipeState.active
            })
        }
        const results = await AppDataSource.getRepository(Recipes).save(recipe)
        return results
    } catch (error: any) {
        throw new Error(error)
    }
}