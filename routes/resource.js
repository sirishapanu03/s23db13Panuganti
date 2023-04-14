var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var cake_controller = require('../controllers/cakes');
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
module.exports = router;