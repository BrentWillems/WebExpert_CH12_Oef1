var express = require('express');
var bodyParser = require('body-parser');
var Car = require('./models/cars');

var routes = require('./routes');

var app = express();
app.use(bodyParser.json());


Car.deleteMany({}, function (err) {
    console.log('DELETING ALL CAR OBJECTS');
});
var car1 = new Car({ manufacturer: 'Porsche', model: '911', price: 135000, wiki: 'http://en.wikipedia.org/wiki/Porsche_997' });
var car2 = new Car({ manufacturer: 'Tesla', model: 'model 3', price: 30000, wiki: 'https://nl.wikipedia.org/wiki/Tesla_Model_3' });
var car3 = new Car({ manufacturer: 'Tesla', model: 'model S', price: 100000, wiki: 'https://nl.wikipedia.org/wiki/Tesla_Model_S' });
Car.create(car1, car2, car3);


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});

app.use('/api', routes);

app.listen(3000);