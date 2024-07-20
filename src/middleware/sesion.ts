import { NextFunction, Request, Response } from "express"
import { verificarToken } from "../utils/gestion.jwt"

const verificaJwt = (req: Request, res: Response, next: NextFunction) => {

    try {
        const jwtBearer = req.headers.authorization
        const jwt = jwtBearer?.split(' ').pop()
        const esTokenValido = verificarToken(`${jwt}`)

        if(!esTokenValido) {
            res.status(401)
            res.send("Token de sesion invalido")
        } else {
            console.log(`${jwt}`)
            next()
        }

        

    } catch (e) {
        res.status(400)
        res.send("Sesion no valida")
    }

}

export { verificaJwt }