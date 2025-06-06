DROP DATABASE IF EXISTS moviesdb;

CREATE DATABASE moviesdb;

USE moviesdb;

CREATE TABLE movies (
    id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
    title VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    director VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    poster TEXT,
    rate DECIMAL(2,1) NOT NULL,
    genre JSON
);

CREATE TABLE genres (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE movie_genres (
    movie_id BINARY(16) REFERENCES movies(id),
    genre_id INT REFERENCES genres(id),
    PRIMARY KEY (movie_id, genre_id)
);

INSERT INTO genres (name) VALUES 
('Action'), 
('Adventure'), 
('Comedy'), 
('Drama'), 
('Fantasy'), 
('Horror'), 
('Thriller'), 
('Sci-Fi'), 
('Crime');

INSERT INTO movies (id, title, year, director, duration, poster, rate)
VALUES 
(UUID_TO_BIN(UUID()), 'The Shawshank Redemption', 1994, 'Frank Darabont', 142, 'https://i.ebayimg.com/images/g/4goAAOSwMyBe7hnQ/s-l1200.webp', 9.3),
(UUID_TO_BIN(UUID()), 'The Dark Knight', 2008, 'Christopher Nolan', 152, 'https://i.ebayimg.com/images/g/yokAAOSw8w1YARbm/s-l1200.jpg', 9.0),
(UUID_TO_BIN(UUID()), 'Inception', 2010, 'Christopher Nolan', 148, 'https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_UF1000,1000_QL80_.jpg', 8.8);

-- Obtener UUID binarios de las películas insertadas
SET @shawshank = (SELECT id FROM movies WHERE title = 'The Shawshank Redemption');
SET @dark_knight = (SELECT id FROM movies WHERE title = 'The Dark Knight');
SET @inception = (SELECT id FROM movies WHERE title = 'Inception');

-- Relacionar películas con géneros
INSERT INTO movie_genres (movie_id, genre_id) VALUES
(@shawshank, (SELECT id FROM genres WHERE name = 'Drama')),

(@dark_knight, (SELECT id FROM genres WHERE name = 'Action')),
(@dark_knight, (SELECT id FROM genres WHERE name = 'Crime')),
(@dark_knight, (SELECT id FROM genres WHERE name = 'Drama')),

(@inception, (SELECT id FROM genres WHERE name = 'Action')),
(@inception, (SELECT id FROM genres WHERE name = 'Adventure')),
(@inception, (SELECT id FROM genres WHERE name = 'Sci-Fi'));

SELECT BIN_TO_UUID(id) id, title, year, director, duration, poster, rate FROM moviesdb.movies;