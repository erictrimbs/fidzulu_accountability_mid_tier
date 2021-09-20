const express = require('express');
const router = express.Router();
const request = require('request');
const homeUrl = 'http://localhost:';
const backendPort = 3035;
const urlPort = homeUrl + backendPort;

module.exports = router;

router.get('/team', function(req, res, next) {
    request(urlPort + '/dvds/team', { json: true }, (error, response, body) => {
        if (error) { 
            res.status(404).send("Not responsive to dvds/team");
            return console.log(error); 
        }
        res.status(200).send(body);
    });
});

router.get('/all/:location', function(req, res, next) {
    request(urlPort + '/dvds/all/' + req.params.location.toLowerCase(), { json: true }, (error, response, body) => {
        if (error) { 
            res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
            return console.log(error); 
        }
        res.send(body);
    });
});