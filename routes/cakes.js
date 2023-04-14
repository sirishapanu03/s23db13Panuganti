var express = require('express');
const cake_controlers= require('../controllers/cakes');
var router = express.Router();

/* GET home page. */
router.get('/', cake_controlers.cake_view_all_Page);

module.exports = router;
