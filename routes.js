var express = require('express');
var router = express.Router();
var db = require('./db');
var Car = require('./models/cars');

router.get('/', (req, res) => {
    //TODO: uitleg gebruik API
    res.send('usage: send requests to /api/cars');
});

router.get('/cars', function(req, res) {
    Car.find((err, cars) => {
        if(err) res.send(err);
        res.json(cars);
    })
});

module.exports = router;
