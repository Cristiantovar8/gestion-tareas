import swaggerJSDoc, {OAS3Definition,OAS3Options} from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.3",
    info: {
        title: "Documentacion API Gestion Tareas",
        version: "1.0.0",
    },
    server: [
        {
            url: "http://localhost:3000",
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: 'JWT'
            },
        },
        schemas:{
            usuario: {
                type: "object",
                required: ["nombre", "clave"],
                properties: {
                    nombre: { type: "string" },
                    clave: { type: "string" }
                }
            } ,
            tarea: {
                type: "object",
                required: ["titulo", "descripcion", "fechaVencimiento", "estado"],
                properties: {
                    titulo: { type: "string" },
                    descripcion: { type: "string" },
                    fechaVencimiento: { 
                        type: "string",
                        format: "date"
                    },
                    estado: { type: "string" }
                }
            } 
        }
    }
}

const swaggerOptions: OAS3Options ={
    swaggerDefinition,
    apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions)