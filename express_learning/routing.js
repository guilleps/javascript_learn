const http = require("node:http");
const pikachuJSON = require("./pikachu/pikachu.json");

const port = process.env.PORT ?? 3000;

const processRequest = async (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/pikachu":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(pikachuJSON));
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
      }

    case "POST":
      switch (url) {
        case "/pokemon":
          let body = "";

          // escucha el evento data
          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", () => {
            const data = JSON.parse(body);

            // llamar una base de datos
            res.writeHead(201, {
              "Content-Type": "text/html; charset=utf-8",
            });
            res.end(JSON.stringify(data));
          });
          break;

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          return res.end("404 Not Found");
      }
  }
};

const server = http.createServer(processRequest);

server.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});
