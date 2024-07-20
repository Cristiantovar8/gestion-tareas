import TareaModel from "../models/tarea.model"
import { Tarea } from "../interfaces/tarea.interface"
import UsuarioModel from "../models/usuario.model";

const insertar = async (tarea: Tarea) => {

    const usuarioEncontrado = await UsuarioModel.findOne( { nombre: tarea.usuario } )

    if (!usuarioEncontrado) return "Usuario no existe"

    const responseInsert = await TareaModel.create(tarea)
    return responseInsert

};

const obtenerLista = async (usuario: String) => {
    const responseLista = await TareaModel.find({usuario});
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

const eliminar = async (id: string) => {
    const response = await TareaModel.deleteOne({ _id: id });
    return response;
}

export { insertar, obtenerLista, obtener, actualizar, eliminar };
