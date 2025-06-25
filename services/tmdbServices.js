const axios = require("axios");
const API_KEY = "TU_API_KEY_TMDB"; // Agregá tu API key de TMDb
const BASE_URL = "https://api.themoviedb.org/3";

exports.getPopular = async () => {
  const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return res.data.results;
};

exports.getById = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};

// Más endpoints de TMDb abajo...
