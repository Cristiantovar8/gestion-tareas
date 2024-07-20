import { Usuario } from "../interfaces/usuario.interface"
import UsuarioModel from "../models/usuario.model"
import { generarToken } from "../utils/gestion.jwt"
import { comparar, encriptar } from "../utils/gestion.password"

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