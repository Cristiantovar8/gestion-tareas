## API Gestion de Tareas

##### Node, Express, TypeScript, MongoDB

## Configuracion

##### Configuracion global

**Instalar TypeScript**
TypeScript es un superconjunto de JavaScript que añade tipado estático opcional y funciones avanzadas a JavaScript

    npm i typescript -g

**Instalar Node:**
ts-node es una herramienta que permite ejecutar y depurar archivos TS directamente en Node. js sin necesidad de compilarlos previamente a JS.

    npm i ts-node -g

**Instalar nodemon**
Nodemon permite que todos los cambios realizados en el proyecto se muestren en tiempo real.

    npm i nodemon -g

##### Configuracion de proyecto

Instalar dependencias definidas en package.json

    npm install

- express: Es un marco de aplicación y APIs web y flexible para Node.js.
- mongoose: Es una biblioteca de modelado de datos para MongoDB y Node.js.
- bcryptjs: Es una biblioteca para cifrar contraseñas en Node.js.
- jsonwebtoken: Es una biblioteca para crear y verificar JSON Web Tokens (JWT).
- swagger-jsdoc: Es una herramienta que genera documentación Swagger a partir de comentarios JSDoc en tu código.
- swagger-ui-express: Es un middleware para servir la interfaz Swagger UI en aplicaciones Express.


## Ejecucion

    npm run dev

## Arquitectura

El proyecto está estructurado del a siguiente forma:

- **interfaces**: Define interfaces TypeScript para los datos.
- **controllers**: Maneja la lógica de peticiones y respuestas la aplicación.
- **models**: Define los esquemas de la base de datos.
- **routes**: Define las rutas de la API.
- **services**: Contiene la lógica de negocio para operaciones específicas.
- **middleware**: Contiene middleware para la autenticación y autorización.
- **config**: Configura la conexión a la base de datos.
- **docs**: Contiene la configuración de Swagger para la documentación de la API.
- **utils**: Contiene utilidades auxiliares como la gestión de JWT y contraseñas.
- **types**: Define tipos globales extendidos para Express.
