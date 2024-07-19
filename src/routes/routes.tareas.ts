import {Router} from "express";
import { obtenerTarea, obtenerTareas, crearTarea, actualizarTarea, eliminarTarea } from "../controllers/tarea.controller";


const router = Router();

router.get('/tareas', obtenerTareas);

router.get('/tareas/:id', obtenerTarea);

router.post('/tareas/', crearTarea);

router.put('/tareas/:id', actualizarTarea);

router.delete('/tareas/:id', eliminarTarea);

export {router};