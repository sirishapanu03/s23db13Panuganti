var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var cake_controller = require('../controllers/cakes');
var detail_controller = require('../controllers/detail')
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// CAKE ROUTES ///
// POST request for creating a cake.
router.post('/cakes', cake_controller.cake_create_post);
// DELETE request to delete cake.
router.delete('/cakes/:id', cake_controller.cake_delete);
// PUT request to update cake.
router.put('/cakes/:id', cake_controller.cake_update_put);
// GET request for one cake.
router.get('/cakes/:id', cake_controller.cake_detail);
// GET request for list of all cake items.
router.get('/cakes', cake_controller.cake_list);
router.get('/', cake_controller.cake_view_all_Page);


/* GET detail cake page */
router.get('/cakes/detail', detail_controller.cake_view_one_Page);
/* GET create cake page */
router.get('/cakes/create', detail_controller.cake_create_Page);
/* GET  update cake page */
router.get('/update', detail_controller.cake_update_Page);

/* GET delete cake page */
router.get('/delete', detail_controller.cake_delete_Page);

module.exports = router;