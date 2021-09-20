const request = require('request');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/classA/:serviceName/team', function (req, midRes) {
    const serviceName = req.params.serviceName.toLowerCase();

    if (serviceName != 'bikes' && serviceName != 'food' && serviceName != 'toys') {
        midRes.status(404).send("Invalid service name " + serviceName + "; available service names are 'bikes', 'food', and 'toys' at http://localhost:3031//classA/:servicename/team");
        return
    }

    let port;

    if (serviceName == 'bikes')
        port = 3031
    else if (serviceName == 'food')
        port = 3032
    else if (serviceName == 'toys')
        port = 3033

    const url = "http://localhost:" + port + '/' + serviceName + '/team';

    request(url, { json: true }, (err, backRes, body) => {

        if (err) {
            console.log(err);
            midRes.status(500).send("Backend returned error: " + err)
            return
        }

        midRes.send(body);
    });


});

app.get('/classA/:serviceName/all/:location', function (req, midRes) {
    const serviceName = req.params.serviceName.toLowerCase();
    const location = req.params.location.toLowerCase();

    if (location != 'raleigh' && location != 'durham') {
        midRes.status(404).send("Invalid location " + location + "; valid locations are 'Raleigh' and 'Durham' at http://localhost:3031/classA/:serviceName/all/:location");
        return
    }
    if (serviceName != 'bikes' && serviceName != 'food' && serviceName != 'toys') {
        midRes.status(404).send("Invalid service name " + serviceName + "; available service names are 'bikes', 'food', and 'toys' at http://localhost:3031/classA/:serviceName/all/:location");
        return
    }

    let port;

    if (serviceName == 'bikes')
        port = 3031
    else if (serviceName == 'food')
        port = 3032
    else if (serviceName == 'toys')
        port = 3033

    const url = "http://localhost:" + port + '/' + serviceName + '/all/' + location;

    request(url, { json: true }, (err, backRes, body) => {

        if (err) {
            console.log(err);
            midRes.status(500).send("Backend returned error: " + err)
            return
        }

        midRes.send(body);
    });
});

// Change the 404 message modifing the middleware
app.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Valid routes are '/classA/:serviceName/all/:location' and '/classA/:servicename/team'.");
});

// start the server in the port 3021 !
app.listen(3021, function () {
    console.log('Example app listening on port 3021. http://localhost:3021/');
});




