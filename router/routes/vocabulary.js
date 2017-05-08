/**
 * Created by Nikita on 08.05.2017.
 */

const app = require('express').Router();

app.get('/vocabulary', function (req, res, next) {
    res.render('voceb')
});

module.exports = app;