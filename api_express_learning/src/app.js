const express = require("express"); // require -> CommonJS
const crypto = require("node:crypto");
const cors = require("cors");

const movies = require("./movies.json");
const { validateMovie, validatePartialMovie } = require("./schemas/movie");

const app = express();
app.use(express.json());
app.disable("x-powered-by"); // deshabilita el header X-Powered-By: Express
app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        "http://localhost:8080",
        "http://localhost:1234",
        "https://movies.com",
        "https://midu.dev",
      ];

      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);

// Todos los recursos que sea MOVIES se identifican con barra /movies
app.get("/movies", (req, res) => {
  const { genre } = req.query;

  if (genre) {
    const filteredMovies = movies.filter(
      (movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase()) // por temas de mayuscula
    );

    return res.json(filteredMovies);
  }

  return res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) {
    return res.json(movie);
  }

  res.status(404).json({ message: "Movie not found" });
});

app.post("/movies", (req, res) => {
  const objectValidated = validateMovie(req.body);

  if (objectValidated.error) {
    // lo mismo que !objectValidated.success
    // 422 Unprocessable Entity
    return res
      .status(400)
      .json({ error: JSON.parse(objectValidated.error.message) });
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...objectValidated.data,
  };

  // Esto no seria REST, porque estamos guardando el estado en la aplicacion en memoria
  movies.push(newMovie);

  res.status(201).json(newMovie); // actualiza la cache del cliente
});

app.patch("/movies/:id", (req, res) => {
  const result = validatePartialMovie(req.body);

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data,
  };

  movies[movieIndex] = updateMovie;

  return res.json(updateMovie);
});

app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  movies.splice(movieIndex, 1);

  return res.json({ message: "Movie deleted" });
});

// app.options("/movies/:id", (req, res) => { // ya existe un modulo llamado cors que nos facilita el trabajo
//   const origin = req.header("origin");
//   if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
//     res.header("Access-Control-Allow-Origin", origin);
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
//   }
//   res.send(200);
// });

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server listen on port http://localhost:${PORT}`);
});
