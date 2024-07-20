import { hash, compare} from "bcryptjs" 

const encriptar = async (clave: string) => {
    const hashClave = await hash(clave, 8)
    return hashClave
}

const comparar = async (clave: string, hashClave: string) => {
    const esCorrecto = await compare(clave, hashClave)
    return esCorrecto
}

export { encriptar, comparar }