const express = require('express');
const router = express.Router();
const NodeController = require('../controllers/NodeController');


router.get('/', NodeController.homepage);
router.get('/categories',NodeController.exploreCategories);
router.get('/categories/:id', NodeController.exploreCategoriesById);
router.get('/article/:id',NodeController.exploreArticle);
router.post('/search', NodeController.searchArticle);
router.get('/explore-latest', NodeController.exploreLatest);
router.get('/explore-random', NodeController.exploreRandom);
router.get('/submit-article', NodeController.submitArticle);
router.post('/submit-article', NodeController.submitArticleOnPost);
module.exports = router;