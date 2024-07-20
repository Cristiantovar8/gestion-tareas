import { sign, verify} from "jsonwebtoken"
const jwtSecret = "123abcd"

const generarToken = (nombreUsuario: string) => {
    const jwt = sign({nombreUsuario}, jwtSecret, { expiresIn: "2m"})
    return jwt
}

const verificarToken = async (clave: string) => {
}

export { generarToken, verificarToken }