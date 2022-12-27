const express = require("express");
const {
  getAllArticles,
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
} = require("../controllers/ArticleController");
 
const router = express.Router();
 
router.route("/").get(getAllArticles).post(createArticle);
router.route("/:id").get(getArticleById).put(updateArticle).delete(deleteArticle);
 
module.exports = router;
