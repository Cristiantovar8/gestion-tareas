import TareaModel from "../models/tarea.model"
import { Tarea } from "../interfaces/tarea.interface"

const insertar = async (tarea: Tarea) => {

    const responseInsert = await TareaModel.create(tarea)
    return responseInsert

};

const obtenerLista = async () => {
    const responseLista = await TareaModel.find({});
    return responseLista
}
export { insertar, obtenerLista };
