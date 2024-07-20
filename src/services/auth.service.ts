import { Usuario } from "../interfaces/usuario.interface"
import UsuarioModel from "../models/usuario.model"

const registrarUsuario = async (usuario: Usuario) => {
    const existe = await UsuarioModel.findOne( { nombre: usuario.nombre } )

    if (existe) return "Usuario ya existe"

    const registraUsuario = await UsuarioModel.create(usuario)

    return registraUsuario
}

const loginUsuario = async () => {}

export { registrarUsuario, loginUsuario }