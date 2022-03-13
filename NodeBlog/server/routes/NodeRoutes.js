const express = require('express');
const router = express.Router();
const NodeController = require('../controllers/NodeController');


router.get('/', NodeController.homepage);
router.get('/categories',NodeController.exploreCategories);

module.exports = router;