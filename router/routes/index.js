/**
 * Created by Nikita on 05.05.2017.
 */

let app = require('express').Router();

app.get('/', function (req, res) {
    res.render('index');
});

module.exports = app;