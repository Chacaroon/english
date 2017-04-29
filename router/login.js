/**
 * Created by Nikita on 27.04.2017.
 */

const app = new (require('express').Router)();
const passport = require('passport');

app.route('/login')
    .get(function (req, res) {
        res.send('Вошёл')
    })
    .post(
    passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/',
        failureFlash: true })
);

module.exports = app;