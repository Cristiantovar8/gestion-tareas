import express from "express"
import {router} from "./routes/routes.tareas"
import db from "./config/mongo"

const PORT = 3000
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded(
        {
            extended: true
        }));

app.use(router);
db().then(() => console.log("Conectado a base de datos"));
app.listen(PORT, () => {
    console.log(`Escuchado en puerto ${PORT}`)
})