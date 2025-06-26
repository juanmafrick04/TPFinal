const { admin } = require("../firebase");

// Registro de usuario (sólo esto puede hacer el backend)
exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().createUser({ email, password });
    res.json({
      uid: userRecord.uid,
      email: userRecord.email
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login NO debe implementarse aquí (lo hace el frontend/Postman con REST API)
exports.login = (req, res) => {
  res.status(501).json({ error: "El login se hace en el cliente (Firebase Auth REST), no en el backend" });
};