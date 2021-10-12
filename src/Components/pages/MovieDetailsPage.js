import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
  Link,
  Route,
} from "react-router-dom";
import { getMovieById } from "../services/API";
// import Cast from "./Cast";
// import NotFoundPage from "./NotFoundPage";
// import Reviews from "./Reviews";

const Cast = lazy(() =>
  import("./Cast" /* webpackChunkName: 'cast-sabpage' */)
);
const Reviews = lazy(() =>
  import("./Reviews" /* webpackChunkName: 'cast-subpage' */)
);

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const { id } = useParams();
  useEffect(() => {
    getMovieById(id).then((movie) => setMovie({ ...movie }));
  }, [id]);
  console.log(movie);
  const onBackBtnClick = () => {
    if (location?.state?.from) {
      history.push({
        pathname: location.state.from,
        search: location.state.search,
      });

      return;
    }
    history.push("/");
  };
  const { name, rating, overview, genres, image } = movie;
  return (
    <>
      <button type="button" onClick={onBackBtnClick}>
        Back
      </button>

      <div>
        <h1>{name}</h1>
        {image && (
          <img src={`https://image.tmdb.org/t/p/w500${image}`} width={300} />
        )}
        <h3>Rating:</h3>
        <p>{rating}</p>
        <h3>Description:</h3>
        <p>{overview}</p>
        <h3>Genres:</h3>
        <ul>
          {genres &&
            genres.map((genre) => (
              <li key={genre.id}>
                <span>{genre.name}</span>
              </li>
            ))}
        </ul>

        <Link
          to={{
            pathname: `${match.url}/cast`,
            state: {
              from: location?.state?.from || "/movies",
              search: location?.state?.search,
            },
          }}
        >
          Cast
        </Link>

        <Link
          to={{
            pathname: `${match.url}/reviews`,
            state: {
              from: location?.state?.from || "/movies",
              search: location?.state?.search,
            },
          }}
        >
          Reviews
        </Link>
      </div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Route path="/movies/:id/cast">
          <Cast />
        </Route>
        <Route path="/movies/:id/reviews">
          <Reviews />
        </Route>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
