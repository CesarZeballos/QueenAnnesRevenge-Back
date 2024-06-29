import { IRecipe } from "../interfaces/IRecipes";

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