import { DataSource } from "typeorm/data-source";
import { Recipes } from "../entities/Recipes";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "abuconano",
    database: "queen_annes_revenge",
    // dropSchema: true, // esto hace que elimine todos los datos creados...
    synchronize: true,
    logging: true,
    entities: [Recipes],
    subscribers: [],
    migrations: [],
})

export const RecipesModel = AppDataSource.getRepository(Recipes)