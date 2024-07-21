import TareaModel from "../models/tarea.model"
import { Tarea } from "../interfaces/tarea.interface"
import UsuarioModel from "../models/usuario.model";

const insertar = async (tarea: Tarea, usuarioAutenticado: string) => {

    const usuarioEncontrado = await UsuarioModel.findOne( { nombre: usuarioAutenticado } )

    if (!usuarioEncontrado) return "Usuario no existe"

    tarea.usuario = usuarioAutenticado

    const responseInsert = await TareaModel.create(tarea)
    return responseInsert

};

const obtenerLista = async (usuarioAutenticado: string) => {
    const responseLista = await TareaModel.find({usuario: usuarioAutenticado});
    return responseLista;
};

const obtener = async (id:string, usuarioAutenticado: string) => {
    const response = await TareaModel.findOne({ _id: id });
    if (response?.usuario != usuarioAutenticado)
        return "Tarea no asociada al usuario"
    return response
}

const actualizar = async (id:string, tarea: Tarea, usuarioAutenticado: string) => {

    const tareaUsuario = await TareaModel.findOne({ _id: id });

    if(tareaUsuario?.usuario != usuarioAutenticado)
        return "Tarea no asociada al usuario"

    tarea.usuario = usuarioAutenticado

    const response = await TareaModel.updateOne(
        { _id: id }, 
        tarea, 
        { new:true, runValidators: true }
    );
    return response;
}

const eliminar = async (id: string, usuarioAutenticado: string) => {

    const tareaUsuario = await TareaModel.findOne({ _id: id });

    if(tareaUsuario?.usuario != usuarioAutenticado)
        return "Tarea no asociada al usuario"

    const response = await TareaModel.deleteOne({ _id: id });
    return response;
}

export { insertar, obtenerLista, obtener, actualizar, eliminar };
