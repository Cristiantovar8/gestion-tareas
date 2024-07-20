import { Request, Response } from "express"
import { registrarUsuario, loginUsuario } from "../services/auth.service"

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

const login = async (req: Request, res: Response) => {
   
    try {
        
    } catch(e) {
        
    }
}

export {registrar, login}