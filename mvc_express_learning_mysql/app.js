import express, { json } from "express";
import { moviesRouter } from "./routes/movies.js";
import { corsMiddleware } from "./middlewares/cors.js";

const app = express();
app.use(json());
app.disable("x-powered-by"); // deshabilita el header X-Powered-By: Express
app.use(corsMiddleware());

// prefijo de las rutas de movie.json
app.use('/movies', moviesRouter);// esto indica que cuando accedo a /movies usara todas las rutas en moviesRouter

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listen on port http://localhost:${PORT}`);
});
