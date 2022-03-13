const express = require('express');
const router = express.Router();
const NodeController = require('../controllers/NodeController');


router.get('/', NodeController.homepage);
router.get('/categories',NodeController.exploreCategories);
router.get('/categories/:id', NodeController.exploreCategoriesById);
router.get('/article/:id',NodeController.exploreArticle);

module.exports = router;