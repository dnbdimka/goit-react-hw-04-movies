import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { getMoviesByQuery } from "../services/API";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const match = useRouteMatch();
  console.log(match);

  useEffect(() => {}, [query]);

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    getMoviesByQuery(query).then((data) => setMovies([...data]));
  };

  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input type="text" onChange={onInputChange} value={query} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `${match.url}/${movie.id}`,
                state: { from: match.url },
              }}
            >
              {movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
