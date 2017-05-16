/**
 * Created by Nikita on 05.05.2017.
 */

const app = require('express').Router();
const mongoose = require('mongoose');
const User = require('./../../models').User;

app.post('/register', function (req, res, next) {
    let user = new User({username: req.body.username, password: req.body.password});
    mongoose.connection.collection('users').save(user, function (err) {
        if (err) {
            if (err.code === 11000) {
                res.app.locals.message = 'This name is already in use';
                res.redirect('/login');
            } else {
                return next(err)
            }
        } else {
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                res.app.locals.message = undefined;
                res.redirect(`/${user.username}`);
            });
        }
    })
});

module.exports = app;