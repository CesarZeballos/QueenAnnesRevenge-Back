import { IBotanic } from "./IRecipes";

export interface RecipeDto {
    name: string,
    nickname: string,
    vape: IBotanic[],
    macerated: IBotanic[],
    abvMacerated: number,
    time: number,
    abvGin: number
}