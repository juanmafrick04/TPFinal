const axios = require("axios");
const API_KEY = "TU_API_KEY_TMDB"; // <--- Agregá tu API KEY de TMDb
const BASE_URL = "https://api.themoviedb.org/3";

exports.getPopular = async () => {
  const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return res.data.results;
};

exports.getById = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};

exports.searchMovies = async (query) => {
  const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  return res.data.results;
};

exports.getTopRated = async () => {
  const res = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  return res.data.results;
};

exports.getUpcoming = async () => {
  const res = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  return res.data.results;
};

exports.getNowPlaying = async () => {
  const res = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  return res.data.results;
};

exports.getGenres = async () => {
  const res = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return res.data.genres;
};

exports.getSimilar = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
  return res.data.results;
};

// Más endpoints de TMDb abajo...
