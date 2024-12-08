// DEFINE LAS RUTAS DE LA APLICACION - ENDPOINTS
// NO CARGA EL APP.JS Y HAY MEJOR MODULARIDAD (ESCALABILIDAD)

import express from "express";
import { cantidadDeRecetasCreadas, verPerfil } from "../controller/creadorController.js";

const creadRouter = express.Router();

creadRouter.get("/perfil", verPerfil);
creadRouter.get("/cantidadRecetas", cantidadDeRecetasCreadas);

export default creadRouter;
