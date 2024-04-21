const express = require('express')();

let destinations;


fetch('https://freetestapi.com/api/v1/destinations').then((data) => { data.json() }).then((data) => { destinations = data });

express.get('/destinations', (req, res) => {
    res.send(destinations);
})