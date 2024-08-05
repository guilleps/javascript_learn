import { Router } from "express";

import { MovieController } from "../controllers/movies.js";

export const moviesRouter = Router();

moviesRouter.get("/", MovieController.getAll);
moviesRouter.post("/", MovieController.createMovie);

moviesRouter.get("/:id", MovieController.getById);
moviesRouter.delete("/:id", MovieController.deleteMovieById);
moviesRouter.patch("/:id", MovieController.updateMovie);
