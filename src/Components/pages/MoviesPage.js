import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import { getMoviesByQuery } from "../services/API";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  console.log(query);
  // console.log(location);

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get("query");
    // console.log(searchQuery);
    setQuery(searchQuery);
    if (searchQuery) {
      getMoviesByQuery(searchQuery).then((data) => setMovies([...data]));
      return;
    }
  }, [location.search]);

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    getMoviesByQuery(query).then((data) => setMovies([...data]));

    history.push({
      ...location,
      // pathname: location.pathname,
      search: `query=${query}`,
    });
    // location.search = `?query=${query}`;
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
                state: {
                  from: match.url,
                  search: `query=${query}`,
                },
                // search: `query=${query}`,
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
