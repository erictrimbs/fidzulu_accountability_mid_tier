const express = require('express');
const router = express.Router();
const request = require('request');
const homeUrl = 'http://localhost:';
const backendPort = 3036;
const urlPort = homeUrl + backendPort;

module.exports = router;

router.get('/team', function(req, res, next) {
    request(urlPort + '/laptops/team', { json: true }, (error, response, body) => {
        if (error) { 
            res.status(404).send("Not responsive to /laptops/team");
            return console.log(error); 
        }
        res.status(200).send(body);
    });
});

router.get('/all/:location', function(req, res, next) {
    request(urlPort + '/laptops/all/' + req.params.location, { json: true }, (error, response, body) => {
        if (error) { 
            res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
            return console.log(error); 
        }
        res.send(body);
    });
});