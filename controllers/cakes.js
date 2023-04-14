var Cake = require('../models/cakes');
// List of all Cakes
exports.cake_list = async function(req, res) {
    try{
    theCakes = await Cake.find();
    res.send(theCakes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Cake.
exports.cake_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Cake detail: ' + req.params.id);
};
// Handle Cake create on POST.
exports.cake_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Cake();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"cake_type":"goat", "cost":12, "size":"large"}
    document.cake_flavour = req.body.cake_flavour;
    document.weight = req.body.weight;
    document.cake_cost = req.body.cake_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Cake delete form on DELETE.
exports.cake_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Cake delete DELETE ' + req.params.id);
};
// Handle Cake update form on PUT.
exports.cake_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Cake update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.cake_view_all_Page = async function(req, res) {
    try{
    theCakes = await Cake.find();
    res.render('cakes', { title: 'Cake Search Results', results: theCakes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

