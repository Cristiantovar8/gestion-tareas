/// <reference path="../types/global.d.ts" />

import { Request, response, Response } from "express"
import { insertar, obtener, obtenerLista, actualizar, eliminar } from "../services/tarea.service";

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