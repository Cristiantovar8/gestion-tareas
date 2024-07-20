import { sign, verify} from "jsonwebtoken"
const jwtSecret = "123abcd"

const generarToken = (nombreUsuario: string) => {
    const jwt = sign({nombreUsuario}, jwtSecret, { expiresIn: "5m"})
    return jwt
}

const verificarToken = (token: string) => {

    const esTokenValido = verify(token, jwtSecret)
    return esTokenValido

}

export { generarToken, verificarToken }