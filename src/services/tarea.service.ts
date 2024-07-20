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

const actualizar = async (id:string, data: Tarea) => {
    const response = await TareaModel.findOneAndUpdate(
        { _id: id }, 
        data, 
        { new:true, runValidators: true }
    );
    return response;
}

const eliminar = async ( ) => {

}

export { insertar, obtenerLista, obtener, actualizar, eliminar };
