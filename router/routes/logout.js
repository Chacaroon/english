/**
 * Created by Nikita on 07.05.2017.
 */

const app = require('express').Router();

app.get('/logout', function (req, res) {
    req.logOut();
    req.app.locals.auth = false;
    res.redirect('/');
});

module.exports = app;