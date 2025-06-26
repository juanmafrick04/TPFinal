require("dotenv").config();

const axios = require("axios");
const API_KEY = process.env.TMDB_API_KEY;
const BEARER_TOKEN = process.env.TMDB_BEARER_TOKEN; // Opcional
const BASE_URL = "https://api.themoviedb.org/3";

if (!API_KEY) {
  throw new Error("TMDB_API_KEY no está definida en .env");
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: BEARER_TOKEN
    ? {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        accept: "application/json",
      }
    : {},
});

// Helper para loguear errores de API
function handleError(error) {
  if (error.response) {
    console.error("TMDb Error:", error.response.status, error.response.data);
    throw new Error(error.response.data.status_message || "TMDb API error");
  } else {
    console.error("TMDb Error:", error.message);
    throw new Error("TMDb API error");
  }
}

exports.getPopular = async () => {
  try {
    const res = await axiosInstance.get(`/movie/popular`, {
      params: { api_key: API_KEY },
    });
    return res.data.results;
  } catch (error) {
    handleError(error);
  }
};

exports.getById = async (id) => {
  try {
    const res = await axiosInstance.get(`/movie/${id}`, {
      params: { api_key: API_KEY },
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

exports.searchMovies = async (query) => {
  try {
    const res = await axiosInstance.get(`/search/movie`, {
      params: { api_key: API_KEY, query },
    });
    return res.data.results;
  } catch (error) {
    handleError(error);
  }
};

exports.getTopRated = async () => {
  try {
    const res = await axiosInstance.get(`/movie/top_rated`, {
      params: { api_key: API_KEY },
    });
    return res.data.results;
  } catch (error) {
    handleError(error);
  }
};

exports.getUpcoming = async () => {
  try {
    const res = await axiosInstance.get(`/movie/upcoming`, {
      params: { api_key: API_KEY },
    });
    return res.data.results;
  } catch (error) {
    handleError(error);
  }
};

exports.getNowPlaying = async () => {
  try {
    const res = await axiosInstance.get(`/movie/now_playing`, {
      params: { api_key: API_KEY },
    });
    return res.data.results;
  } catch (error) {
    handleError(error);
  }
};

exports.getGenres = async () => {
  try {
    const res = await axiosInstance.get(`/genre/movie/list`, {
      params: { api_key: API_KEY },
    });
    return res.data.genres;
  } catch (error) {
    handleError(error);
  }
};

exports.getSimilar = async (id) => {
  try {
    const res = await axiosInstance.get(`/movie/${id}/similar`, {
      params: { api_key: API_KEY },
    });
    return res.data.results;
  } catch (error) {
    handleError(error);
  }
};
