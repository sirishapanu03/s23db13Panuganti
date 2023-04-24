var express = require('express');
const cake_controlers= require('../controllers/cakes');
var detail_controller = require('../controllers/detail');

var router = express.Router();

/* GET home page. */
router.get('/', cake_controlers.cake_view_all_Page);


/* GET detail cake page */
router.get('/detail', detail_controller.cake_view_one_Page);
/* GET create cake page */
router.get('/create', detail_controller.cake_create_Page);

// A little function to check if we have an authorized user and continue on
or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
 
/* GET  update cake page */
router.get('/update',secured, detail_controller.cake_update_Page);

/* GET delete cake page */
router.get('/delete', detail_controller.cake_delete_Page);

module.exports = router;
