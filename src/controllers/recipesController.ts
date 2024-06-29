import { Request, Response } from "express";
import { IRecipe } from "../interfaces/IRecipes";
import { getRecipesServices } from "../services/recipesServices";


export const getRecipes = async (req: Request, res: Response) => {
    try {
        const recipes: IRecipe[] = await getRecipesServices();
        res.status(200).json(recipes);
    } catch (error: any) {
        res.status(400).json({ error: error.message});
    }
}

