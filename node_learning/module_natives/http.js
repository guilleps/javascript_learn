// dependencia http - module nativo que permite hacer conexiones con el protocolo http, creando un servidor y recibir peticiones(request)
const http = require("node:http");

const desiredPort = process.env.PORT ?? 3000

// creamos un servidor con el modulo http
const server = http.createServer(
  // que hace? -> recibe una peticion o devolver una respuesta
  (req, res) => {
    // agregamos un callback que gestion la respuesta o la peticion
    console.log("request received"); // cada que se ejcuta se informa que se ha recibido la peticion
    res.end("hola mundo"); // y respondemos con una 'hola mundo'
  }
);

// // debemos indicar donde escucha el servidor, es decir el puerto por donde escucha las requesr y response
// server.listen(3000, () => {
//   // puede ocurrir el caso que el puerto ya esta en uso, para ello
//   // bajamos el proceso actual | cambiamos el puerto | indicamos el puerto 0 entonces buscara un puerto disponible
//   console.log("server listening on port http://localhost:3000");
// });

/* PORT = 0 */
// en vista que no sabemos que puerto disponible ha escogido, usamos la propiedades de server
// para obtener el puerto actual el cual ejecuta el servidor
// server.listen(0, () => {
//   console.log(
//     `server listening on port http://localhost:${server.address().port}`
//   );
// });

// con una modulo propio que busca automaticamente que puerto esta desocupado en caso el 3000 no lo permita
const { findAvailablePort } = require("./free-port.js");

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});
