import {Router} from "express";
import { obtenerTarea, obtenerTareas, crearTarea, actualizarTarea, eliminarTarea } from "../controllers/tarea.controller";
import { verificaJwt } from "../middleware/sesion";


const routerTarea = Router();

/**
 * @openapi
 * /tareas:
 *  get:
 *      tags:
 *          - tareas
 *      summary: "Obtener lista de tareas"
 *      description: "Endpoint para obtener lista de tareas"
 *      responses:
 *          '200':
 *              description: Retorna tarea insertada en la base de datos
 *          '401': 
 *              description: Usuario no autorizado
 *          '500': 
 *              description: Error al guardar tarea
 *      security:
 *          - bearerAuth: []
 */
routerTarea.get('/tareas', verificaJwt, obtenerTareas);


/**
 * @openapi
 * /tareas/{id}:
 *  get:
 *      tags:
 *          - tareas
 *      summary: "Obtener tarea"
 *      description: "Endpoint para obtener una tarea"
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID de la tarea a obtener
 *      responses:
 *          '200':
 *              description: Retorna tarea insertada en la base de datos
 *          '401': 
 *              description: Usuario no autorizado
 *          '500': 
 *              description: Error al guardar tarea
 *      security:
 *          - bearerAuth: []
 */
routerTarea.get('/tareas/:id', verificaJwt, obtenerTarea);


/**
 * @openapi
 * /tareas:
 *  post:
 *      tags:
 *          - tareas
 *      summary: "Crear tarea"
 *      description: "Endpoint para crear nueva tarea"
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/tarea"   
 *      responses:
 *          '200':
 *              description: Retorna tarea insertada en la base de datos
 *          '401': 
 *              description: Usuario no autorizado
 *          '500': 
 *              description: Error al guardar tarea
 *      security:
 *          - bearerAuth: []
 */
routerTarea.post('/tareas/', verificaJwt, crearTarea);

/**
 * @openapi
 * /tareas/{id}:
 *  put:
 *      tags:
 *          - tareas
 *      summary: "Actualizar tarea"
 *      description: "Endpoint para actualizar tarea"
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID de la tarea a actualizar
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/tarea"   
 *      responses:
 *          '200':
 *              description: Retorna tarea insertada en la base de datos
 *          '401': 
 *              description: Usuario no autorizado
 *          '500': 
 *              description: Error al guardar tarea
 *      security:
 *          - bearerAuth: []
 */
routerTarea.put('/tareas/:id', verificaJwt, actualizarTarea);


/**
 * @openapi
 * /tareas/{id}:
 *  delete:
 *      tags:
 *          - tareas
 *      summary: "Eliminar tarea"
 *      description: "Endpoint para eliminar tarea"
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID de la tarea a eliminar
 *      responses:
 *          '200':
 *              description: Retorna tarea insertada en la base de datos
 *          '401': 
 *              description: Usuario no autorizado
 *          '500': 
 *              description: Error al guardar tarea
 *      security:
 *          - bearerAuth: []
 */
routerTarea.delete('/tareas/:id', verificaJwt, eliminarTarea);

export {routerTarea};