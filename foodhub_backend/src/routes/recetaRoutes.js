import express from "express";
import { crearReceta, recetasPorCategoria } from "../controller/recetaController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const recetaRouter = express.Router();

recetaRouter.post("/crear", authenticateToken, crearReceta);
recetaRouter.get("/recetas", recetasPorCategoria);

export default recetaRouter;
