export interface IRecipe {
    id: number,
    name: string,
    nickname: string,
    vape: IBotanic[],
    macerated: IBotanic[],
    abvMacerated: number,
    time: number,
    abvGin: number,
    state: boolean
}
export interface IBotanic {
    name: string,
    size: number
}


