/**
 * Created by Nikita on 08.05.2017.
 */

const app = require('express').Router();

app.get('/dictionary', function (req, res, next) {
    res.render('dictionary')
});

module.exports = app;