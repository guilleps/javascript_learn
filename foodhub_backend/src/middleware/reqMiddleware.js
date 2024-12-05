/**
 * Ejemplo de middleware que siempre registra cada solicitud/request dada hacia el servidor
 */
const reqMiddleware = (req, res, next) => {
  // Registrar la solicitud inicial
  console.log(
    `Time: ${new Date().toISOString()} | Method: ${req.method}, | Endpoint: ${
      req.originalUrl
    }`
  );

  // Escuchar el evento `finish` para capturar el código de estado al final de la respuesta
  res.on("finish", () => {
    console.log(
      `Status: ${res.statusCode} | Method: ${req.method} | Endpoint: ${req.originalUrl}`
    );
  });

  next();
};

export default reqMiddleware;
