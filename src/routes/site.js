const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

router.get('/introdu', siteController.introduu) ;
router.get('/', siteController.home) ;


module.exports = router;