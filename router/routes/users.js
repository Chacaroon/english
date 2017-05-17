const app = require('express').Router();
const models = require('./../../models');

app.get('/:user', function (req, res, next) {
    models.User.findOne({username: req.params.user}, function (err, user) {
        if (err) return next(err);

        if (user) {
            let otherUser = user.equals(req.user) ? false : user;
            return res.render('users', {
                user: req.user
                , otherUser: otherUser
            });
        } else {
            return req.user.username ? res.redirect(req.user.username) : res.redirect('/');
        }
    })
});

module.exports = app;