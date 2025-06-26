const tmdb = require("../services/tmdbService");

// 1. Películas populares
exports.getPopular = async (req, res) => {
  try {
    const movies = await tmdb.getPopular();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 2. Película por ID
exports.getById = async (req, res) => {
  try {
    const movie = await tmdb.getById(req.params.id);
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 3. Buscar películas
exports.search = async (req, res) => {
  try {
    const movies = await tmdb.searchMovies(req.params.query);
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 4. Top rated
exports.getTopRated = async (req, res) => {
  try {
    const movies = await tmdb.getTopRated();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 5. Próximas a estrenarse
exports.getUpcoming = async (req, res) => {
  try {
    const movies = await tmdb.getUpcoming();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 6. Ahora en cines
exports.getNowPlaying = async (req, res) => {
  try {
    const movies = await tmdb.getNowPlaying();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 7. Géneros
exports.getGenres = async (req, res) => {
  try {
    const genres = await tmdb.getGenres();
    res.json(genres);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 8. Películas similares
exports.getSimilar = async (req, res) => {
  try {
    const movies = await tmdb.getSimilar(req.params.id);
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Podés agregar más métodos como búsqueda, tendencias, etc.
