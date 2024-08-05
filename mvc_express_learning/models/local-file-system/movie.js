import { randomUUID } from "node:crypto";
import movies from '../../movies.json' with { type: 'json' }

// como leer un json en ESModules
// import fs from "node:fs";
// const movies = JSON.parse(fs.readFileSync("./movies.json", "utf-8"));

// experimental

// como leer un json en ESModules, recomendado por ahora
// import { createRequire } from "node:module";
// const require = createRequire(import.meta.url);
// const movies = require("./movies.json");


export class MovieModel {
  static async getAll({ genre }) {
    if (genre) {
      // el como se filtran los datos y donde se recuperan
      return movies.filter(
        (movie) =>
          movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase()) // por temas de mayuscula
      );
    }
    return movies;
  }

  static async getById ({ id }) {
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
      return movie;
    }
  }

  static async createMovie({ input }) {
    const newMovie = {
        id: randomUUID(),
        ...input,
      };

      movies.push(newMovie);
      return newMovie;
  }

  static async deleteMovieById({ id }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id);
  
    if (movieIndex === -1) {
      return false
    }
  
    movies.splice(movieIndex, 1);

    return true
  }

  static async updateMovie({ id, input }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id);
  
    if (movieIndex === -1) {
      return false
    }
  
    movies[movieIndex] = {
      ...movies[movieIndex],
      ...input,
    };

    return movies[movieIndex];
  }
}
