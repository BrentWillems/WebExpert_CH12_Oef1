var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
var Car = require('./models/cars');

var app = express();
app.use(bodyParser.json());

var seed = false;
if (seed) {
    var car1 = new Car({manufacturer: 'Porsche', model: '911', price: 135000, wiki: 'http://en.wikipedia.org/wiki/Porsche_997'});
    var car2 = new Car({manufacturer: 'Tesla', model: 'model 3', price: 30000, wiki: 'https://nl.wikipedia.org/wiki/Tesla_Model_3'});
    var car3 = new Car({manufacturer: 'Tesla', model: 'model S', price: 100000, wiki: 'https://nl.wikipedia.org/wiki/Tesla_Model_S'});
    Car.create(car1, car2, car3);
}
