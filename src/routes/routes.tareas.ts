import {Router} from "express";
import { obtenerTarea, obtenerTareas, crearTarea, actualizarTarea, eliminarTarea } from "../controllers/tarea.controller";
import { verificaJwt } from "../middleware/sesion";


const routerTarea = Router();

routerTarea.get('/tareas', verificaJwt, obtenerTareas);

routerTarea.get('/tareas/:id', verificaJwt, obtenerTarea);

routerTarea.post('/tareas/', verificaJwt, crearTarea);

routerTarea.put('/tareas/:id', verificaJwt, actualizarTarea);

routerTarea.delete('/tareas/:id', verificaJwt, eliminarTarea);

export {routerTarea};