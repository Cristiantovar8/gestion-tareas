import { NextFunction, Request, Response } from "express"
import { verificarToken } from "../utils/gestion.jwt"

/**
 * Middleware para verificar el token JWT en las solicitudes
 * @param {Request} req - La solicitud HTTP
 * @param {Response} res - La respuesta HTTP
 * @param {NextFunction} next - La función next que llama al siguiente middleware
 * @returns {void}
 * @throws {Error} Error si el token es inválido o no está presente
 */
const verificaJwt = (req: Request, res: Response, next: NextFunction) => {

    try {
        const jwtBearer = req.headers.authorization
        const jwt = jwtBearer?.split(' ').pop()
        const tokenValido = verificarToken(`${jwt}`)

        if(!tokenValido) {
            res.status(401)
            res.send("Token de sesion invalido")
        } else {
            console.log(`${tokenValido.nombreUsuario}`)
            req.usuario = tokenValido.nombreUsuario;
            next()
        }

        

    } catch (e) {
        res.status(401)
        res.send("Sesion no valida")
    }

}

export { verificaJwt }