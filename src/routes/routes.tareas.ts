import {Router} from "express";
import { obtenerTarea, obtenerTareas, crearTarea, actualizarTarea, eliminarTarea } from "../controllers/tarea.controller";


const routerTarea = Router();

routerTarea.get('/tareas', obtenerTareas);

routerTarea.get('/tareas/:id', obtenerTarea);

routerTarea.post('/tareas/', crearTarea);

routerTarea.put('/tareas/:id', actualizarTarea);

routerTarea.delete('/tareas/:id', eliminarTarea);

export {routerTarea};