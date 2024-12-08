import express from "express";
import {
  confirmAccount,
  createCreadorController,
  loginCreadorController,
} from "../controller/authController.js";

const authRouter = express.Router();

authRouter.post("/registrar", createCreadorController);
authRouter.get("/confirmar", confirmAccount);
authRouter.post("/login", loginCreadorController);

export default authRouter;
