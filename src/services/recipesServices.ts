import { Recipes } from "../entities/Recipes";
import { IRecipe } from "../interfaces/IRecipes";
import { RecipeDto } from "../interfaces/RecipesDto";

export const getRecipesServices = async () => {
    const recipes: IRecipe[] = [
        {
            id: 1,
            name: "Cerveza",
            nickname: "Cerveza",
            vape: [],
            macerated: [],
            abvMacerated: 0.9,
            time: 5,
            abvGin: 0.4,
            state: true
        }

    ]
    return recipes
}

export const createRecipeServices = async (recipeData: RecipeDto) => {
    const newRecipe: IRecipe = {
        id: 1,
        name: "031",
        nickname: recipeData.nickname,
        vape: recipeData.vape,
        macerated: recipeData.macerated,
        abvMacerated: recipeData.abvMacerated,
        time: recipeData.time,
        abvGin: recipeData.abvGin,
        state: true
    }
    return newRecipe
}

export const getRecipeByIdServices = async () => {
    const recipes: IRecipe = {
            id: 1,
            name: "get recipe",
            nickname: "Cerveza",
            vape: [],
            macerated: [],
            abvMacerated: 0.9,
            time: 5,
            abvGin: 0.4,
            state: true
        }
    return recipes
}

export const updateRecipeServices = async (recipeData: RecipeDto) => {
    const recipes: IRecipe = {
            id: 1,
            name: "update recipe",
            nickname: recipeData.nickname,
            vape: recipeData.vape,
            macerated: recipeData.macerated,
            abvMacerated: recipeData.abvMacerated,
            time: recipeData.time,
            abvGin: recipeData.abvGin,
            state: true
        }
    return recipes
}

export const disabledRecipeServices = async () => {
    const recipes: IRecipe = {
            id: 1,
            name: "disabled recipe",
            nickname: "Cerveza",
            vape: [],
            macerated: [],
            abvMacerated: 0.9,
            time: 5,
            abvGin: 0.4,
            state: true
        }
    return recipes
}