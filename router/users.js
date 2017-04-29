/**
 * Created by Nikita on 27.04.2017.
 */

const app = (require('express').Router)();

app.all('/users(/*)?', function (req, res, next){
    req.isAuthenticated()
        ? res.send('Вошёл')
        : res.redirect('/');
});

module.exports = app;