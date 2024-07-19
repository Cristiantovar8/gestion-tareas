import "dotenv/config"
import { connect } from "mongoose"

async function dbConnect(): Promise<void> {

    //const DB_URI = <string>process.env.DB_URI
    const DB_URI = "mongodb+srv://dyegote26:ZJXubPdea7Wi8Pn8@cluster0.q65xske.mongodb.net/GestionTareas?retryWrites=true&w=majority&appName=Cluster0"
    console.log(DB_URI)
    await connect(DB_URI)
    
}

export default dbConnect