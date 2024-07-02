import { AppDataSource } from "./config/data-source"
import {PORT} from "./config/envs"
import server from "./server"

AppDataSource.initialize()
.then(res => {
    console.log("conexion a la base de datos realizada con exito")
    server.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`)
    })
})
