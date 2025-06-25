const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const authMiddleware = require("../middleware/authMiddleware");

// Todos requieren auth
router.get("/popular", authMiddleware, moviesController.getPopular);                // 1
router.get("/:id", authMiddleware, moviesController.getById);                      // 2
router.get("/search/:query", authMiddleware, moviesController.search);              // 3
router.get("/top_rated", authMiddleware, moviesController.getTopRated);            // 4
router.get("/upcoming", authMiddleware, moviesController.getUpcoming);              // 5
router.get("/now_playing", authMiddleware, moviesController.getNowPlaying);         // 6
router.get("/genres", authMiddleware, moviesController.getGenres);                  // 7
router.get("/similar/:id", authMiddleware, moviesController.getSimilar);            // 8

module.exports = router;

