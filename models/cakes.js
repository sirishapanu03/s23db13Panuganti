const mongoose = require("mongoose")
const cakeSchema = mongoose.Schema({ cake_flavour: String, weight: String, cake_cost: Number})
module.exports = mongoose.model("cake",
cakeSchema)