import { IBotanic } from "./IRecipes";

export interface RecipeDto {
    nickname: string,
    vape: IBotanic[],
    macerated: IBotanic[],
    abvMacerated: number,
    time: number,
    abvGin: number
}