import express from "express";
import {
  confirmAccount,
  createCreadorController,
  loginCreadorController,
} from "../controller/creadorController.js";

const router = express.Router();

router.post("/registrar", createCreadorController);
router.get("/confirmar", confirmAccount);
router.post("/login", loginCreadorController);

export default router;
