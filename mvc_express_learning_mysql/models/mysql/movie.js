import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "129837465lg",
  database: "moviesdb",
});

connection.connect((err) => {
  if (err) {
    console.error(`${err.name}: ${err.message}`);
    return;
  }

  console.log(`Se ha realizado la conexion a la moviesdb`);
});

export class MovieModel {
  static async getAll({ genre }) {

    if (genre) {
        const lowerCaseGenre = genre.toLowerCase();

        const [genres] = await connection.query(
            'SELECT id, name FROM WHERE LOWER(name) = ?; ', [lowerCaseGenre]
        )

        // no genre found
        if (genre.length === 0) return []

        // get the id from the first genre result
        const [{ id }] = genres

        // get all movies ids from database table
        
    }

    // lo indica entre [] porque al hacer la consulta muestra una lista con dos tuplas, una de la peticion y otra de las propiedades de la tabla
    const [movies] = await connection.query(
      "SELECT BIN_TO_UUID(id) id, title, year, director, duration, poster, rate FROM moviesdb.movies;"
    );

    console.log([movies]);
  }

  static async getById({ id }) {}

  static async create({ input }) {}

  static async delete({ id }) {}

  static async update({ id, input }) {}
}
