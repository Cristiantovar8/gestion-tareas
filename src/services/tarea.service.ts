import TareaModel from "../models/tarea.model"
import { Tarea } from "../interfaces/tarea.interface"

const insertar = async (tarea: Tarea) => {

    const responseInsert = await TareaModel.create(tarea)
    return responseInsert

}

export { insertar }