let app = require('express').Router();
const models = require('./../../models');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        models.User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username' });
            }
            if (user.password !== password) {
                return done(null, false, { message: 'Incorrect password' });
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    models.User.findById(id, function(err,user){
        err
            ? done(err)
            : done(null,user);
    });
});

app.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (info && info.message) res.app.locals.message = info.message;
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            res.app.locals.message = undefined;
            res.redirect(`/${user.username}`);
        });
    })(req, res, next);
});

app.get('/login',function(req, res, next)
{
    if(req.isAuthenticated()) return res.redirect('/');
    res.render('login');
});

module.exports = app;