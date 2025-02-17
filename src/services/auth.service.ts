import { Usuario } from "../interfaces/usuario.interface"
import UsuarioModel from "../models/usuario.model"
import { generarToken } from "../utils/gestion.jwt"
import { comparar, encriptar } from "../utils/gestion.password"


/**
 * Registra un usuario nuevo en el sistema, valida si el usuario existe
 * @param usuario 
 * @returns usuario registrado
 */
const registrarUsuario = async (usuario: Usuario) => {
    const existe = await UsuarioModel.findOne( { nombre: usuario.nombre } )

    if (existe) return "Usuario ya existe"

    const hashClave = await encriptar(usuario.clave)

    const registraUsuario = await UsuarioModel.create( {
        nombre: usuario.nombre, 
        clave: hashClave
    } )

    return registraUsuario
}


/**
 * Inicia sesion de usuario, validando usuario y contraseña y generando un toiken jwt
 * @param usuario 
 * @returns token de autenticacion e informacion de usuario
 */
const loginUsuario = async (usuario: Usuario) => {
    const nombre = usuario.nombre
    const clave = usuario.clave

    const usuarioEncontrado = await UsuarioModel.findOne( { nombre: usuario.nombre } )

    if (!usuarioEncontrado) return "Usuario no existe"

    const hashClave = usuarioEncontrado.clave

    const esCorrecto = await comparar(clave, hashClave)

    if(!esCorrecto) return "Clave incorrecta"

    const token = generarToken(nombre)

    const data = {
        token: token,
        usuario: usuarioEncontrado
    }

    return data
}

export { registrarUsuario, loginUsuario }