/// <reference path="../types/global.d.ts" />

import { Request, response, Response } from "express"
import { insertar, obtener, obtenerLista, actualizar, eliminar } from "../services/tarea.service";

/**
 * Obtiene una tarea específica por su ID
 * @param {Request} req - La solicitud HTTP
 * @param {Response} res - La respuesta HTTP
 * @returns {Promise<void>}
 * @throws {Error} Error al obtener la tarea
 */
const obtenerTarea = async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const usuarioAutenticado = req.usuario
        const response = await obtener(id, usuarioAutenticado);
        const data = response ? response: "Tarea no encontrada";
        res.send(data);
    } catch(e) {
        console.log(e)
        res.status(500)
        res.send(`Error al obtener tarea:\n ${e}`)
    }
}


/**
 * Obtiene la lista de tareas del usuario autenticado
 * @param {Request} req - La solicitud HTTP
 * @param {Response} res - La respuesta HTTP
 * @returns {Promise<void>}
 * @throws {Error} Error al obtener las tareas
 */
const obtenerTareas = async (req: Request, res: Response) => {
    try{
        const usuarioAutenticado = req.usuario
        const response = await obtenerLista(usuarioAutenticado);
        res.send(response);
    } catch(e) {
        console.log(e)
        res.status(500)
        res.send(`Error al obtener tareas:\n ${e}`)
    }

}

/**
 * Crea una nueva tarea
 * @param {Request} req - La solicitud HTTP
 * @param {Response} res - La respuesta HTTP
 * @returns {Promise<void>}
 * @throws {Error} Error al crear la nueva tarea
 */
const crearTarea = async (req: Request, res: Response) => {
    const {body} = req
    try {
        const usuarioAutenticado = req.usuario
        const response = await insertar(body, usuarioAutenticado)
        res.send(response)
    } catch(e) {
        console.log(e)
        res.status(500)
        res.send(`Error al crar nueva tarea:\n ${e}`)
    }
}


/**
 * Actualiza una tarea específica por su ID
 * @param {Request} req - La solicitud HTTP
 * @param {Response} res - La respuesta HTTP
 * @returns {Promise<void>}
 * @throws {Error} Error al actualizar la tarea
 */
const actualizarTarea = async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const {body} = req;
        const usuarioAutenticado = req.usuario
        const response = await actualizar(id, body, usuarioAutenticado);
        res.send(response);
    } catch(e) {
        console.log(e)
        res.status(500)
        res.send(`Error al actualizar tareas:\n ${e}`)
    }
}


/**
 * Elimina una tarea específica por su ID
 * @param {Request} req - La solicitud HTTP
 * @param {Response} res - La respuesta HTTP
 * @returns {Promise<void>}
 * @throws {Error} Error al eliminar la tarea
 */
const eliminarTarea = async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const usuarioAutenticado = req.usuario
        const response = await eliminar(id, usuarioAutenticado);
        res.send(response);
    } catch(e) {
        console.log(e)
        res.status(500)
        res.send(`Error al eliminar tarea:\n ${e}`)
    }
}


export {obtenerTarea, obtenerTareas, crearTarea, actualizarTarea, eliminarTarea}