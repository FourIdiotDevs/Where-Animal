const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// --- FIREBASE SETUP (Safe Mode) ---
try {
  const serviceAccount = require('./service-account.json');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log("🔥 Firebase connected!");
} catch (error) {
  console.log("⚠️  No Firebase key found. Running in offline mode.");
}

// --- API ROUTES ---
app.get('/api/status', (req, res) => {
  res.json({ message: "Backend is talking to Frontend!", time: new Date() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});