import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { getTrendingMovies } from "../services/API";

const Homepage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const match = useRouteMatch();
  useEffect(() => {
    getTrendingMovies().then((data) => setPopularMovies([...data]));
  }, []);

  return (
    <>
      <ul>
        {popularMovies &&
          popularMovies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
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

export default Homepage;
