const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

router.get('/', siteController.home) ;

module.exports = router;