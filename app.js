const request = require('request');

// Require express and create an instance of it
const express = require('express');
const app = express();

app.get('/classA/:servicename/team', function (req, res) {
    res.send('TODO: get from backend');
});

app.get('/classA/:serviceName/all/:location', function (req, res) {
    const serviceName = req.params.serviceName.toLowerCase();
    const location = req.params.location.toLowerCase();

    console.log(location != 'raleigh' && location != 'durham', location);

    if (location != 'raleigh' && location != 'durham') {
        res.status(404).send("Invalid location " + location + "; valid locations are 'Raleigh' and 'Durham' at http://localhost:3031/classA/:serviceName/all/:location");
        return
    }
    if (serviceName != 'bike' && serviceName != 'food' && serviceName != 'toys') {
        res.status(404).send("Invalid service name " + serviceName + "; available service names are 'bike', 'food', and 'toys' at http://localhost:3031/classA/:serviceName/all/:location");
    }

    let port;

    if (serviceName == 'bike')
        port = 3031
    else if (serviceName == 'food')
        port = 3032
    else if (serviceName == 'toys')
        port = 3033

    const url = "http://localhost:" + port + '/' + serviceName + '/all/' + location;
    let response;

    // request(url, { json: true }, (err, res, body) => {
    //     if (err) { return console.log(err); }
    //     console.log(body.url);
    //     console.log(body.explanation);

    response = { "request is": "valid", 'service name': serviceName, 'location': location };
    // });

    res.send(response);
});

// Change the 404 message modifing the middleware
app.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3021 !
app.listen(3021, function () {
    console.log('Example app listening on port 3021. http://localhost:3021/');
});




