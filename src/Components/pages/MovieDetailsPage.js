import React, { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { getMovieById } from "../services/API";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const history = useHistory();
  const location = useLocation();

  const { id } = useParams();
  useEffect(() => {
    getMovieById(id).then((movie) => setMovie({ ...movie }));
  }, [id]);

  const onBackBtnClick = () => {
    history.push(location.state.from);
  };
  console.log(location.state.from);
  return (
    <>
      <button type="button" onClick={onBackBtnClick}>
        Back
      </button>
      <h1>{movie.name}</h1>
    </>
  );
};

export default MovieDetailsPage;
