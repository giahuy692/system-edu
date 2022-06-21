const express = require('express');
const router = express.Router();

const shopController = require('../controllers/ShopController');

router.get('/introdu', shopController.ao);
router.get('/contact', shopController.contact);
router.get('/', shopController.quan) ;


module.exports = router;