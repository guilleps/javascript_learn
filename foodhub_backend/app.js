// PUNTO DE ENTRADA DE LA APLICACIÓN
import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import reqMiddleware from "./src/middleware/reqMiddleware.js";
import { authenticateToken } from "./src/middleware/authMiddleware.js";
import creadRouter from "./src/routes/CreadorRoutes.js";
import recetaRouter from "./src/routes/recetaRoutes.js";
import { errorHandler } from "./src/middleware/errorMiddleware.js";

const app = express();
const port = 8080;
const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

// middlewares
app.use(express.json()); // procesa JSON
app.use(reqMiddleware); // registra el tiempo de requests
app.use(cors(corsOptions));

// routes
app.use("/auth", authRoutes);
app.use("/creador", authenticateToken, creadRouter);
app.use("/explorar", recetaRouter);

// routes prueba
app.get("/", (req, res) => {
  res.send("Endpoint inicial funcionando... :D");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


/* Express también permite enviar archivos como respuesta utilizando res.sendFile(). */
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get("/file", (req, res) => {
  const filePath = path.join(__dirname, "READme.md");
  res.sendFile(filePath);
});
