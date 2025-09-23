const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Servir le frontend statique
app.use(express.static(path.join(__dirname, '../frontend')));

// API simple
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello Eco-World 🌍' });
});

// Lancer serveur
if (require.main === module) {
  app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
}

module.exports = app; // export pour tests
