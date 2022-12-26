const router = require("express").Router();
const Article = require("./model.js");

//Utilisation du package npm permettant de bloquer les abus lors de tentatives de connexions
const rateLimit = require("express-rate-limit");

// Crée une limitation en cas de tentatives trop nombreuses
// Va protéger l'API des attaques brute force
const limitation = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // Limite à 3 tentatives par adresse IP
  message:
    "Nombre de requêtes abusives détectées , attendez 5 minutes avant nouvel essai",
});

router.get("articles/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
