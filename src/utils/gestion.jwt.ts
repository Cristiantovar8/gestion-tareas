import { sign, verify} from "jsonwebtoken"
const jwt = require('jsonwebtoken');
const jwtSecret = "123abcd"

const generarToken = (nombreUsuario: string) => {
    const jwt = sign({nombreUsuario}, jwtSecret, { expiresIn: "60m"})
    return jwt
}

const verificarToken = (token: string) => {

    const tokenValido = jwt.verify(token, jwtSecret)
    return tokenValido

}

export { generarToken, verificarToken }