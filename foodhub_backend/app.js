// PUNTO DE ENTRADA DE LA APLICACIÓN
import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import reqMiddleware from "./src/middleware/reqMiddleware.js";
import { authenticateToken } from "./src/middleware/authMiddleware.js";
import creadRouter from "./src/routes/CreadorRoutes.js";
import recetaRouter from "./src/routes/recetaRoutes.js";

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
app.use("/explorar", authenticateToken, recetaRouter);

// routes prueba
app.get("/", (req, res) => {
  res.send("Endpoint inicial funcionando... :D");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

// verifiy connection with server SMTP
// import { transporter } from "./src/config/email.js";

// transporter.verify(function (error, success) {
//   if (error) {
//     console.error("Error en la conexión SMTP:", error);
//   } else {
//     console.log("Servidor SMTP listo para enviar correos.");
//   }
// });
