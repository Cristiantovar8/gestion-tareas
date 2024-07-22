import { hash, compare} from "bcryptjs" 

/**
 * Encripta una clave usando bcrypt
 * @param {string} clave - La clave a encriptar
 * @returns {Promise<string>} La clave encriptada
 */
const encriptar = async (clave: string) => {
    const hashClave = await hash(clave, 8)
    return hashClave
}

/**
 * Compara una clave con una clave encriptada usando bcrypt
 * @param {string} clave - La clave sin encriptar
 * @param {string} hashClave - La clave encriptada
 * @returns {Promise<boolean>} `true` si la clave coincide con la clave encriptada, `false` en caso contrario
 */
const comparar = async (clave: string, hashClave: string) => {
    const esCorrecto = await compare(clave, hashClave)
    return esCorrecto
}

export { encriptar, comparar }