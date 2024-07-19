import express from "express"
import {router} from "./routes/routes.tareas"

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

app.listen(PORT, () => {
    console.log(`Escuchado en puerto ${PORT}`)
})