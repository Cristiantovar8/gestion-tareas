import { Request, Response } from "express"
import { registrarUsuario, loginUsuario } from "../services/auth.service"


/**
 * Registra un nuevo usuario
 * @param {Request} req - La solicitud HTTP
 * @param {Response} res - La respuesta HTTP
 * @returns Usuario creado
 * @throws {Error} Error al registrar el usuario
 */
const registrar = async (req: Request, res: Response) => {
    const {body} = req
    try {
        const responseUser = await registrarUsuario(body)
        res.send(responseUser)   
    } catch(e) {
        console.log(e)
        res.status(500)
        res.send(`Error al registrar usuario:\n ${e}`)
    }
}

/**
 * Autentica un usuario
 * @param {Request} req - La solicitud HTTP
 * @param {Response} res - La respuesta HTTP
 * @returns Usuario autenticado y token
 * @throws {Error} Error al iniciar sesión
 */
const login = async (req: Request, res: Response) => {
   
    const {body} = req
    try {
        const responseUser = await loginUsuario(body)
        res.send(responseUser)   
    } catch(e) {
        console.log(e)
        res.status(500)
        res.send(`Error al iniciar sesion:\n ${e}`)
    }
}

export {registrar, login}