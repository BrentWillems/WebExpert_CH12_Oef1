var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://127.0.0.1/cars', function(err){
    if (err) {
        console.log(err); return;  
    } 
    console.log('Connected');
});
module.exports = db;