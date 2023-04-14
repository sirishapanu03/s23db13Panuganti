var Cake = require('../models/cakes');
// List of all Cakes
exports.Cake_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Cake list');
};
// for a specific Cake.
exports.Cake_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Cake detail: ' + req.params.id);
};
// Handle Cake create on POST.
exports.Cake_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Cake create POST');
};
// Handle Cake delete form on DELETE.
exports.Cake_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Cake delete DELETE ' + req.params.id);
};
// Handle Cake update form on PUT.
exports.Cake_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Cake update PUT' + req.params.id);
};