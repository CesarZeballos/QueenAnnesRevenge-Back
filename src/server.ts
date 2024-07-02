import express from "express";
import router from "./routes";
// en el proyecto tambien usamos morgan y cors...

const server = express();

server.use(express.json())
server.use(router)

export default server