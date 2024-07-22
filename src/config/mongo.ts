import "dotenv/config"
import { connect } from "mongoose"

/**
 * Conexion a la base de datos MongoDB
 */
async function dbConnect(): Promise<void> {

    //const DB_URI = <string>process.env.DB_URI
    const DB_URI = "mongodb+srv://cristovaring8:vCIp00hdxRBP8p26@cluster0.vfrdoz5.mongodb.net/GestionTareas?retryWrites=true&w=majority&appName=Cluster0"
    console.log(DB_URI)
    await connect(DB_URI)
    
}

export default dbConnect