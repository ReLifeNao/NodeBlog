const express = require('express');
const router = express.Router();
const NodeController = require('../controllers/NodeController');


router.get('/', NodeController.homepage);

module.exports = router;