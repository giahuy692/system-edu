const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

router.get('/introdu', siteController.intro);
router.get('/contact', siteController.contact);
router.get('/', siteController.home) ;


module.exports = router;