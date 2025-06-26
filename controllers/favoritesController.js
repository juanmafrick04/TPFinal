const { admin } = require("../firebase");

// Colección: favorites/{uid}/movies/{movieId}
exports.addFavorite = async (req, res) => {
  const uid = req.user.uid;
  const { movieId, title } = req.body;
  if (!movieId || !title) {
    return res.status(400).json({ error: "movieId y title son requeridos" });
  }
  try {
    await admin.firestore()
      .collection("favorites")
      .doc(uid)
      .collection("movies")
      .doc(String(movieId))
      .set({ movieId, title });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFavorites = async (req, res) => {
  const uid = req.user.uid;
  try {
    const snap = await admin.firestore()
      .collection("favorites")
      .doc(uid)
      .collection("movies")
      .get();
    const favs = snap.docs.map(doc => doc.data());
    res.json(favs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeFavorite = async (req, res) => {
  const uid = req.user.uid;
  const { movieId } = req.params;
  try {
    await admin.firestore()
      .collection("favorites")
      .doc(uid)
      .collection("movies")
      .doc(String(movieId))
      .delete();
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};