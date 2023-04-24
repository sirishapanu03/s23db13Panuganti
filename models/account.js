const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const accountSchema = new Schema({
 username: String,
 password: {type: String, required: true}
});
accountSchema.plugin(passportLocalMongoose);

accountSchema.methods.validPassword = function(pwd) {
    console.log(pwd)
    console.log(this.password)
    return ( this.password === pwd );
   
  };
// We export the Schema to avoid attaching the model to the
// default mongoose connection.
module.exports = mongoose.model("Account", accountSchema);