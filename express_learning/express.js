const express = require("express");
const pikachuJSON = require("./pikachu/pikachu.json");

const PORT = process.env.PORT ?? 3000;

const app = express();
app.disable("x-powered-by"); // asegura no mostrar la tecnologia usada por cada request

// ------------ la forma facil que nos provee express ------------
// app.use(express.json());

// ------------ la forma compleja pero permite comprende como funciona ------------
app.use((req, res, next) => {
  // no olvider el next, ya que me indica que una vez interceptado y llevado el proceso a cabo, que url o endpoint debe continuar
  if (req.method !== "POST") {
    return next();
  }
  if (req.headers["content-type"] !== "application/json") {
    return next();
  }

  // solo llega request que son POST y que tiene el headwer: 'Content-Type: application/json'
  let body = "";

  req.on("data", (chunk) => {
    // node y express comprenden la data como la informacion del req y se le asigna al body
    // llega como buffer por ell usamos chunk para recibir pedazo por pedazo de la request
    body += chunk.toString(); // al ser un buffer, tenemos que convertirlo en cadena para ser tratado
  });

  req.on("end", () => {
    // al termina de recibir la data -> end
    const data = JSON.parse(body); // parseamos JSON la informacion para que se comprenda
    data.timestamp = Date.now(); // opcional -> añadir la fecha de la request
    // mutar la request y meter la informacion en el req.body
    req.body = data;
    next(); // continuar con el proceso
  });
});

app.get("/pokemon/pikachu", (req, res) => {
  res.json(pikachuJSON);
});

app.post("/pokemon", (req, res) => {
  // req.body deberiamos guardar en la bd
  res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
