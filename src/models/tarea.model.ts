import { Schema, Types, model, Model } from "mongoose"
import { Tarea } from "../interfaces/tarea.interface"

const tareaSchema = new Schema<Tarea>(
    {
        titulo: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        fechaVencimiento: {
            type: Date,
            required: true
        },
        estado: {
            type: String, 
            enum: ["PENDIENTE", "EN-PROGRESO", "COMPLETADO"],
            required: true
        },

    },
    {
        timestamps: true,
        versionKey: false
    }
)

const TareaModel = model("tareas", tareaSchema)
export default TareaModel