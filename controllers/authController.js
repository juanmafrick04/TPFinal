const { getAuth } = require("../firebase");
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    res.json({ uid: userCredential.user.uid, email: userCredential.user.email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
