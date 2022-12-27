const articleService = require("../services/ArticleService");
 
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await articleService.getAllArticles();
    res.json({ data: articles, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createArticle = async (req, res) => {
  try {
    const article = await articleService.createArticle(req.body);
    res.json({ data: article, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getArticleById = async (req, res) => {
  try {
    const article = await articleService.getArticleById(req.params.id);
    res.json({ data: article, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateArticle = async (req, res) => {
  try {
    const article = await articleService.updateArticle(req.params.id, req.body);
    res.json({ data: article, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteArticle = async (req, res) => {
  try {
    const article = await articleService.deleteArticle(req.params.id);
    res.json({ data: article, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};