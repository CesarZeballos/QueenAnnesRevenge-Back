import express from "express";
import router from "./routes";
import morgan from "morgan";
import cors from "cors";

const server = express();

const corsOptions = {
    origin: 'https://queen-annes-revengeii.vercel.app', 
    optionsSuccessStatus: 200
};

server.use(cors(corsOptions))
server.use(morgan("dev"))
server.use(express.json())
server.use(router)

export default server