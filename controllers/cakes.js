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
exports.cake_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Cake.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found}`);
    }
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
exports.cake_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Cake.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle Cake update form on PUT.
exports.cake_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Cake.findById( req.params.id)
 // Do updates of properties
 //if(req.body.checkboxsale) toUpdate.sale = true;
//else toUpdate.same = false;// VIEWS
 if(req.body.cake_flavour) toUpdate.cake_flavour = req.body.cake_flavour;
 if(req.body.weight) toUpdate.weight = req.body.weight;
 if(req.body.cake_cost) toUpdate.cake_cost = req.body.cake_cost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

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



// Handle a show one view with id specified by query
exports.cake_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Cake.findById( req.query.id)
    res.render('cakedetail',
   { title: 'Cake Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
