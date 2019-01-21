var mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    manufacturer : {type: String, required: true},
    model : {type: String, required: true},
    price : {type: Number, required: true},
    wiki : {type: String, required: true},
});

var Car = mongoose.model('Car', carSchema);
module.exports = Car;