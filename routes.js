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

router.get('/cars/:id', (req, res) =>{
    Car.findById(req.params.id, (err, car) => {
        if(err)
            res.send(err);

        res.json(car);
    });
});

router.post('/cars', (req,res) => {
    let car = new Car({
        manufacturer: req.body.manufacturer,
        model: req.body.model,
        price: req.body.price,
        wiki: req.body.wiki
    });

    car.save((err, car) => {
        if (err) res.send(err);
        res.json(car);
    });
})

router.delete('/cars/:id', (req, res) => {
    Car.remove({_id: req.params.id}, (err, removed) =>{
        if (err)    res.send(err);
        res.json(removed);
    });
});

router.put('/cars', (req, res) => {
    Car.findById(req.body._id, (err, car) =>{
        car.manufacturer = req.body.manufacturer;
        car.model = req.body.model;
        car.price = req.body.price;
        car.wiki = req.body.wiki;

        car.save((saveErr, saveCar) => {
            if (saveErr)    res.send(saveErr);
            res.send(saveCar);
        });
    });
});

module.exports = router;
