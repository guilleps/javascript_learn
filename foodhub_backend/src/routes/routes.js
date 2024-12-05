// DEFINE LAS RUTAS DE LA APLICACION - ENDPOINTS
// NO CARGA EL APP.JS Y HAY MEJOR MODULARIDAD (ESCALABILIDAD)

import express from "express";
import { getAllColegiados } from "../controller/colegiadoController.js";

const router = express.Router();

router.get("/colegiados", getAllColegiados);

export default router;
