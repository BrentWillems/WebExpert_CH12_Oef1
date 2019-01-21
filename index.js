var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/cars', function(err){
    if (err) {
        console.log(err); return;  
    } 
    console.log('Connected');
});

var Car = mongoose.model('Car', {manufacturer: String, model: String, price: Number, wiki: String}); //model
var car1 = new Car({manufacturer: 'Porsche', model: '911', price: 135000, wiki: 'http://en.wikipedia.org/wiki/Porsche_997'});
var car2 = new Car({manufacturer: 'Tesla', model: 'model 3', price: 30000, wiki: 'https://nl.wikipedia.org/wiki/Tesla_Model_3'});
var car3 = new Car({manufacturer: 'Tesla', model: 'model S', price: 100000, wiki: 'https://nl.wikipedia.org/wiki/Tesla_Model_S'});

Car.create(car1, car2, car3);
