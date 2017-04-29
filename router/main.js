/**
 * Created by Nikita on 25.04.2017.
 */

let app = new (require('express').Router)();

app.get('/', function(req, res, next) {
    console.log(req.body);
    res.render('index');
});

module.exports = app;