import TareaModel from "../models/tarea.model"
import { Tarea } from "../interfaces/tarea.interface"

const insertar = async (tarea: Tarea) => {

    const responseInsert = await TareaModel.create(tarea)
    return responseInsert

};

const obtenerLista = async () => {
    const responseLista = await TareaModel.find({});
    return responseLista;
};

const obtener = async (id:string) => {
    const response = await TareaModel.findOne({ _id: id });
    return response
}

export { insertar, obtenerLista, obtener };
