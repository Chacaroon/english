/**
 * Created by Nikita on 05.05.2017.
 */

/*let app = new (require('express').Router)();
const models = require('./../../models');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    function(username, password, done) {
        models.User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !== password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

app.route('/login')
    .post(
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login'
        })
    )
    .get(
        function(req, res, next) {
            if(req.user) return res.redirect('/');
            res.render('login',{
                user:req.user
            });
        });

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    models.User.findById(id, function(err, user) {
        done(err, user);
    });
});*/

let app = require('express').Router();
// Создадим роутер
const models = require('./../../models');
// Загрузим модели
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        models.User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !== password) {
                return done(null, false, { message: 'Incorrect password.' });
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
        if (info && info.message) req.app.locals.message = info.message;
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.redirect(`/${user.username}`);
        });
    })(req, res, next);
});

app.get('/login',function(req, res, next)
{
    if(req.isAuthenticated()) return res.redirect('/');
    res.render('login');
});

module.exports = app;