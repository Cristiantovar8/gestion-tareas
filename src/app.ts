import express from "express"
import {router} from "./routes/routes.tareas"

const PORT = 3000
const app = express()

app.use(router);

app.listen(PORT, () => {
    console.log(`Escuchado en puerto ${PORT}`)
})