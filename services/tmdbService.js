require("dotenv").config(); // ← siempre al tope del archivo

const axios = require("axios");
const API_KEY = process.env.TMDB_API_KEY;
const BEARER_TOKEN = process.env.TMDB_BEARER_TOKEN; // Opcional
const BASE_URL = "https://api.themoviedb.org/3";

// Axios config para Bearer Token si lo necesitas
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: BEARER_TOKEN
    ? {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        accept: "application/json",
      }
    : {},
});

exports.getPopular = async () => {
  const res = await axiosInstance.get(`/movie/popular`, {
    params: { api_key: API_KEY },
  });
  return res.data.results;
};

exports.getById = async (id) => {
  const res = await axiosInstance.get(`/movie/${id}`, {
    params: { api_key: API_KEY },
  });
  return res.data;
};

exports.searchMovies = async (query) => {
  const res = await axiosInstance.get(`/search/movie`, {
    params: { api_key: API_KEY, query },
  });
  return res.data.results;
};

exports.getTopRated = async () => {
  const res = await axiosInstance.get(`/movie/top_rated`, {
    params: { api_key: API_KEY },
  });
  return res.data.results;
};

exports.getUpcoming = async () => {
  const res = await axiosInstance.get(`/movie/upcoming`, {
    params: { api_key: API_KEY },
  });
  return res.data.results;
};

exports.getNowPlaying = async () => {
  const res = await axiosInstance.get(`/movie/now_playing`, {
    params: { api_key: API_KEY },
  });
  return res.data.results;
};

exports.getGenres = async () => {
  const res = await axiosInstance.get(`/genre/movie/list`, {
    params: { api_key: API_KEY },
  });
  return res.data.genres;
};

exports.getSimilar = async (id) => {
  const res = await axiosInstance.get(`/movie/${id}/similar`, {
    params: { api_key: API_KEY },
  });
  return res.data.results;
};
