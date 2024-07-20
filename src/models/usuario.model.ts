import { Schema, Types, model, Model } from "mongoose"
import { Usuario } from "../interfaces/usuario.interface"

const usuarioSchema = new Schema<Usuario>(
    {
        nombre: {
            type: String,
            required: true,
            unique: true
        },
        clave: {
            type: String,
            required: true
        },
       

    },
    {
        timestamps: true,
        versionKey: false
    }
)

const UsuarioModel = model("usuario", usuarioSchema)
export default UsuarioModel