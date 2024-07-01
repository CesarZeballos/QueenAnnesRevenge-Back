import { Request, Response } from "express";
import { IRecipe } from "../interfaces/IRecipes";
import { createRecipeServices, disabledRecipeServices, getRecipeByIdServices, getRecipesServices, updateRecipeServices } from "../services/recipesServices";


export const getRecipes = async (req: Request, res: Response) => {
    try {
        const recipes: IRecipe[] = await getRecipesServices();
        res.status(200).json(recipes);
    } catch (error: any) {
        res.status(400).json({ error: error.message});
    }
}

export const createRecipe = async (req: Request, res: Response) => {
    const {nickname, vape, macerated, abvMacerated, time, abvGin} = req.body;
    try {
        const newRecipe: IRecipe = await createRecipeServices({nickname, vape, macerated, abvMacerated, time, abvGin});
        res.status(201).json(newRecipe);
    } catch (error: any) {
        res.status(400).json({ error: error.message})
    }
}

export const getRecipe = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const recipe: IRecipe = await getRecipeByIdServices();
        res.status(200).json(recipe);
    } catch (error: any) {
        res.status(400).json({ error: error.message})
    }
}

export const updateRecipe = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {nickname, vape, macerated, abvMacerated, time, abvGin} = req.body;
    try {
        const recipe: IRecipe = await updateRecipeServices({nickname, vape, macerated, abvMacerated, time, abvGin});
        res.status(200).json(recipe);
    } catch (error: any) {
        res.status(400).json({ error: error.message})
    }
}

export const disabledRecipe = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const recipe: IRecipe = await disabledRecipeServices();
        res.status(200).json(recipe);
    } catch (error: any) {
        res.status(400).json({ error: error.message})
    }
}