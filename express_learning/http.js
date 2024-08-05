const http = require("node:http");
const fs = require("node:fs");
const desiredPort = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("<h1>Bienvenido a nuestra página de inicio</h1>");
  } else if (req.url === "/image-titan.png") {

    fs.readFile('./titan.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader("Content-Type", "image/jpg");
        res.end(data)
      }
    })
  } else if (req.url === "/contacto") {
    res.end("<h1>Contacto</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404</h1>");
  }
};
const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`);
});

// al ingresar al puerto indicado, la respuesta de "solicitud recibida" suele devolverse dos veces
// ocurre ya que al ingresar se ejecuta automaticamente una request GET a la pagina, para traer el contenido
// y otra automaticamente para traer el favicon.ico de la pagina (por defecto es esto)
