import express from "express";
import { crearReceta } from "../controller/recetaController.js";

const recetaRouter = express.Router();

recetaRouter.post("/crear", crearReceta);

export default recetaRouter;
