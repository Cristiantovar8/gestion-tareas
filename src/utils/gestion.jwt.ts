import { sign, verify} from "jsonwebtoken"
const jwt = require('jsonwebtoken');
const jwtSecret = "123abcd"

/**
 * Genera un token JWT para un usuario
 * @param {string} nombreUsuario - El nombre del usuario para incluir en el token
 * @returns {string} El token JWT generado
 */
const generarToken = (nombreUsuario: string) => {
    const jwt = sign({nombreUsuario}, jwtSecret, { expiresIn: "60m"})
    return jwt
}

/**
 * Verifica un token JWT
 * @param {string} token - El token JWT a verificar
 * @returns {object | string} El payload decodificado si el token es válido
 * @throws {Error} Error si el token es inválido o ha expirado
 */
const verificarToken = (token: string) => {

    const tokenValido = jwt.verify(token, jwtSecret)
    return tokenValido

}

export { generarToken, verificarToken }