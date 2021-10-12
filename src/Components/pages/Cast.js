import React, { useState, useEffect } from "react";
import { getMovieCredits } from "../services/API";
import { Link, useParams } from "react-router-dom";

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getMovieCredits(id).then((cast) => setCast([...cast]));
  }, [id]);

  return (
    <ul>
      {cast &&
        cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              width={200}
            />
            <h4>{name}</h4>
            <span>In role: {character}</span>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
