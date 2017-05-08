const app = require('express').Router();
const models = require('./../../models');

app.get('/:user', function (req, res, next) {
    models.User.findOne({username: req.params.user}, function (err, user) {
        if (err) return next(err);

        if (user) {
            return res.render('users', {
                userData: req.user
            });
        }

        return next();
    })
});

module.exports = app;