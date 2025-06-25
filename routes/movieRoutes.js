const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const authMiddleware = require("../middleware/authMiddleware");

// Todas las rutas requieren estar logueado:
router.get("/popular", authMiddleware, moviesController.getPopular);
router.get("/:id", authMiddleware, moviesController.getById);
// Otros endpoints posibles:
router.get("/search/:query", authMiddleware, async (req, res) => {
  // Ejemplo de búsqueda
});

module.exports = router;
