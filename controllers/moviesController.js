const tmdb = require("../services/tmdbService");

exports.getPopular = async (req, res) => {
  try {
    const movies = await tmdb.getPopular();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const movie = await tmdb.getById(req.params.id);
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Podés agregar más métodos como búsqueda, tendencias, etc.
