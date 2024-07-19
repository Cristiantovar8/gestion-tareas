import { Request, Response } from "express"

const obtenerTarea = (req: Request, res: Response) => {
    const tareaId = req.params.id; 
    res.send({data: `Obteniendo tarea con ID: ${tareaId}`})
}

const obtenerTareas = (req: Request, res: Response) => {
    res.send({data: "Obteniiendo tareas"})
}

const crearTarea = (req: Request, res: Response) => {
    res.json(req.body)
}

const actualizarTarea = (req: Request, res: Response) => {
    res.json(req.body)
}

const eliminarTarea = (req: Request, res: Response) => {
    const tareaId = req.params.id; 
    res.send({data: `Borrando tarea con ID: ${tareaId}`})
}


export {obtenerTarea, obtenerTareas, crearTarea, actualizarTarea, eliminarTarea}