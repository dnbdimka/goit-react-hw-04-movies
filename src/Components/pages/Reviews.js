import React, { useState, useEffect } from "react";
import { getMovieReviews } from "../services/API";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getMovieReviews(id).then((cast) => setReviews([...cast]));
  }, [id]);

  console.log(reviews);

  return (
    <>
      {reviews.length === 0 ? (
        <p>No reviews yet ;(</p>
      ) : (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>Autor: {author}</h4>
            <p>{content}</p>
          </li>
        ))
      )}
    </>
  );
};

export default Reviews;
