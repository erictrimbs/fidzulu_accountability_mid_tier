const express = require('express');
const router = express.Router();
const request = require('request');
// const createError = require('http-errors');
// const url = require('url');
module.exports = router;
const homeUrl = 'http://localhost:';
const backendPort = 3036;
const urlPort = homeUrl + backendPort;

/* GET home page. */

router.get('/team', function(req, res, next) {
    request(urlPort + '/laptops/team', { json: true }, (error, response, body) => {
        if (error) { return console.log(error); }
        res.send(JSON.stringify(body));
    });
});

router.get('/all/:location', function(req, res, next) {
    request(urlPort + '/laptops/all/' + req.params.location, { json: true }, (error, response, body) => {
        if (error) { 
            res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
            return console.log(error); 
        }
        res.send(JSON.stringify(body));
    });
});