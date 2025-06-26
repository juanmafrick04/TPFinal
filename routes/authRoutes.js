const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login); // solo para que la ruta esté, responde 501

module.exports = router;
