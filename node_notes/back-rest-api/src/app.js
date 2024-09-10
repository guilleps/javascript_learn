// instalacion de un proyecto en node con npm init o npm init -y

// configuracion del manejo de commonjs a module en package.json ("type": "module")

// como primer punto instalamos express (npm install express) e importamos express
import express from "express";

import cookieParser from "cookie-parser";
import cors from "cors";

// declarar variable app
const app = express(); // igualamos a express pero siendo una funcion de manera que agregamos parentesis al final
// de esta forma hacemos un instancia de express y luego lo exportamos

app.use(express.json()); // middleware para convertir los req body o que el back lo pueda entender con express
app.use(cors());
app.use(cookieParser());

export default app; // exportamos por defecto de la clase app.js al solo importarlo en otra clase como index.js
