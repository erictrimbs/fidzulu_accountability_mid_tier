const express = require('express');
const router = express.Router();
// const createError = require('http-errors');
// const url = require('url');
module.exports = router;
const homeUrl = 'localhost';

/* GET home page. */

router.get('/classb/books/team', function(req, res, next) {
    // res.send('<h1>hello world</h1>');
    request('https://' + homeUrl + ':3034/books/team', { json: true }, (error, response, body) => {
        if (error) { return console.log(error); }
        res.send(JSON.stringify(response));
    });
});