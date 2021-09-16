const request = require('request');
var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');

//SERVER STARTER CODE-----------------------------------------------

// Require express and create an instance of it
var app = express();
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);

// start the server in the port 3000 !
app.listen(3022, function () {
    console.log('Example app listening on port 3022.');
});




// REQUEST EXAMPLE --------------------------------------------


// request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
//     if (err) { return console.log(err); }
//     console.log(body.url);
//     console.log(body.explanation);
// });