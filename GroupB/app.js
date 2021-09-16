const request = require('request');
var express = require('express');
var path = require('path');
var booksRouter = require('./routes/books');
var dvdsRouter = require('./routes/dvds');
var laptopsRouter = require('./routes/laptops');

//SERVER STARTER CODE-----------------------------------------------

// Require express and create an instance of it
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use('/classb/books', booksRouter);
app.use('/classb/dvds', dvdsRouter);
app.use('/classb/laptops', laptopsRouter);


// start the server in the port 3000 !
app.listen(3022, function () {
    console.log('Class B middle tier listening on port 3022.');
});

app.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});