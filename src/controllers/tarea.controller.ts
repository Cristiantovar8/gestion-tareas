import { Request, response, Response } from "express"
import { insertar, obtenerLista } from "../services/tarea.service";

const obtenerTarea = (req: Request, res: Response) => {
    const tareaId = req.params.id; 
    res.send({data: `Obteniendo tarea con ID: ${tareaId}`})
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

const actualizarTarea = (req: Request, res: Response) => {
    res.json(req.body)
}

const eliminarTarea = (req: Request, res: Response) => {
    const tareaId = req.params.id; 
    res.send({data: `Borrando tarea con ID: ${tareaId}`})
}


export {obtenerTarea, obtenerTareas, crearTarea, actualizarTarea, eliminarTarea}