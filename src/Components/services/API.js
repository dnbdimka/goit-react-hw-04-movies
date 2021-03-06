import axios from "axios";
import NotFoundPage from "../pages/NotFoundPage";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "916298fa596f8dac97669b0ecd32bca2";

export const getTrendingMovies = async () => {
  try {
    const resolve = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    );
    const data = resolve.data.results;
    const normalizeData = data.map((movie) => ({
      id: movie.id,
      name: movie.name || movie.title,
    }));
    return normalizeData;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async (id) => {
  try {
    const resolve = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    const movie = resolve.data;
    const normalizeData = {
      id: movie.id,
      name: movie.name || movie.title,
      genres: movie.genres,
      overview: movie.overview,
      rating: movie.vote_average,
      image: movie.poster_path,
    };
    return normalizeData;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCredits = async (id) => {
  try {
    const resolve = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    return resolve.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async (id) => {
  try {
    const resolve = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    );
    return resolve.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesByQuery = async (query) => {
  try {
    const resolve = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );
    const data = resolve.data.results;
    const normalizeData = data.map((movie) => ({
      id: movie.id,
      name: movie.name || movie.title,
    }));
    return normalizeData;
  } catch (error) {
    console.log(error);
  }
};
