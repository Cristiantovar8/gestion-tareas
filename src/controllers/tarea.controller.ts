import { Request, response, Response } from "express"
import { insertar, obtener, obtenerLista, actualizar, eliminar } from "../services/tarea.service";

const obtenerTarea = async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const response = await obtener(id);
        res.send(response);
    } catch(e) {
        console.log(e)
        res.status(500)
        res.send(`Error al obtener tarea:\n ${e}`)
    }
}

const obtenerTareas = async (req: Request, res: Response) => {
    try{
        const response = await obtenerLista();
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
        const response = await insertar(body)
        res.send(response)
    } catch(e) {
        console.log(e)
        res.status(500)
        res.send(`Error al crar nueva tarea:\n ${e}`)
    }
}

const actualizarTarea = async ({ params, body }: Request, res: Response) => {
    try{
        const {id} = params;
        const response = await actualizar(id, body);
        res.send(response);
    } catch(e) {
        console.log(e)
        res.status(500)
        res.send(`Error al actualizar tareas:\n ${e}`)
    }
}

const eliminarTarea = (req: Request, res: Response) => {
    const tareaId = req.params.id; 
    res.send({data: `Borrando tarea con ID: ${tareaId}`})
}


export {obtenerTarea, obtenerTareas, crearTarea, actualizarTarea, eliminarTarea}