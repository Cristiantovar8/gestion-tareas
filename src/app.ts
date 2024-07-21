import express from "express"
import {routerTarea} from "./routes/routes.tareas"
import {routerAuth} from "./routes/routes.auth"
import db from "./config/mongo"
import swaggerSetup from "./docs/swagger"
import swaggerUi from "swagger-ui-express"

const PORT = 3000
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded(
        {
            extended: true
        }));

app.use(routerTarea);
app.use(routerAuth);
app.use("/documentacionApiTareas", swaggerUi.serve, swaggerUi.setup(swaggerSetup))

db().then(() => console.log("Conectado a base de datos"));
app.listen(PORT, () => {
    console.log(`Escuchado en puerto ${PORT}`)
})