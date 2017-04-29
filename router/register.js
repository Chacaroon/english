/**
 * Created by Nikita on 27.04.2017.
 */

const app = new (require('express').Router)();
const mongoose = require('mongoose');
const User = mongoose.model('user');

app.route('/register')
    .get(function (req, res) {
    res.render('register')
})
    .post(function (req, res, next) {
    let user = new User({username: req.body.username, password: req.body.password});
    mongoose.connection.collection('users').save(user, function (err) {
        if (err) {
            if (err.code === 11000) {
                res.render('index', {message: 'Этот ник занят'});
            } else {
                return next(err)
            }
        } else {
            res.redirect('/login')
        }
    })
});

module.exports = app;