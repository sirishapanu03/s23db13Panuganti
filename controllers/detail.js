var Cake = require('../models/cakes');

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


   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.cake_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('cakecreate', { title: 'Cake Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };