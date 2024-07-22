import TareaModel from "../models/tarea.model"
import { Tarea } from "../interfaces/tarea.interface"
import UsuarioModel from "../models/usuario.model";


/**
 * Crear una tarea nueva en la base de datos asociada al usuario autenticado
 * @param tarea 
 * @param usuarioAutenticado 
 * @returns informacion de creacion de tarea
 */
const insertar = async (tarea: Tarea, usuarioAutenticado: string) => {

    const usuarioEncontrado = await UsuarioModel.findOne( { nombre: usuarioAutenticado } )

    if (!usuarioEncontrado) return "Usuario no existe"

    tarea.usuario = usuarioAutenticado

    const responseInsert = await TareaModel.create(tarea)
    return responseInsert

};


/**
 * Retorna lista de tareas asociadas al usuario autenticado
 * @param usuarioAutenticado 
 * @returns lista de tareas
 */
const obtenerLista = async (usuarioAutenticado: string) => {
    const responseLista = await TareaModel.find({usuario: usuarioAutenticado});
    return responseLista;
};

/**
 * Retorna una tarea con el id y asociada al usuario autenticado
 * @param id 
 * @param usuarioAutenticado 
 * @returns tarea
 */
const obtener = async (id:string, usuarioAutenticado: string) => {
    const response = await TareaModel.findOne({ _id: id });
    if (response?.usuario != usuarioAutenticado)
        return "Tarea no asociada al usuario"
    return response
}


/**
 * Actualiza una tarea segun id recibido y asciada al usuario autenticado
 * @param id 
 * @param tarea 
 * @param usuarioAutenticado 
 * @returns informaciin de update
 */
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

/**
 * Elimita tarea con id recibido y asociada al usuario autenticado
 * @param id 
 * @param usuarioAutenticado 
 * @returns infiormacion de delete
 */
const eliminar = async (id: string, usuarioAutenticado: string) => {

    const tareaUsuario = await TareaModel.findOne({ _id: id });

    if(tareaUsuario?.usuario != usuarioAutenticado)
        return "Tarea no asociada al usuario"

    const response = await TareaModel.deleteOne({ _id: id });
    return response;
}

export { insertar, obtenerLista, obtener, actualizar, eliminar };
