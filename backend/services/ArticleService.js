const ArticleModel = require("../models/Article");
 
exports.getAllArticles = async () => {
  return await ArticleModel.find();
};
 
exports.createArticle = async (article) => {
  return await ArticleModel.create(article);
};
exports.getArticleById = async (id) => {
  return await ArticleModel.findById(id);
};
 
exports.updateArticle = async (id, article) => {
  return await ArticleModel.findByIdAndUpdate(id, article);
};
 
exports.deleteArticle = async (id) => {
  return await ArticleModel.findByIdAndDelete(id);
};