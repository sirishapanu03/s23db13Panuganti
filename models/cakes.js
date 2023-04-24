const mongoose = require("mongoose")
const cakeSchema = mongoose.Schema({ 
    cake_flavour: {
        type:String, required: true, match: /^[a-zA-Z]+$/
    },
    weight: {
        type: String, required: true, match: /^[a-zA-Z0-9]+$/
    },
    cake_cost: {
        type: Number, reqired: true, min:10, max: 1000
    }
});

module.exports = mongoose.model("cake",
cakeSchema)