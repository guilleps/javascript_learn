import { MovieModel } from "../models/local-file-system/movie.js";
// import { MovieModel } from "../models/movie.js";
import { validateMovie, validatePartialMovie } from "../schemas/movie.js";

export class MovieController {
  static async getAll(req, res) {
    const { genre } = req.query;
    const movies = await MovieModel.getAll({ genre });

    // que es lo que renderiza
    return res.json(movies);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const movie = await MovieModel.getById({ id });
    if (movie) {
      return res.json(movie);
    }

    res.status(404).json({ message: "Movie not found" });
  }

  static async createMovie(req, res) {
    const result = validateMovie(req.body);

    if (result.error) {
      // lo mismo que !result.success
      // 422 Unprocessable Entity
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newMovie = await MovieModel.createMovie({ input: result.data });

    res.status(201).json(newMovie); // actualiza la cache del cliente
  }

  static async deleteMovieById(req, res) {
    const { id } = req.params;

    const result = await MovieModel.deleteMovieById({ id });

    if (result === false) {
      return res.status(404).json({ message: "Movie not found" });
    }

    return res.json({ message: "Movie deleted" });
  }

  static async updateMovie(req, res) {
    const result = validatePartialMovie(req.body);

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;
    const updateMovie = await MovieModel.updateMovie({
      id,
      input: result.data,
    });

    return res.json(updateMovie);
  }
}
