var express = require('express');
var router = express.Router();

/* GET home page. */
router
    .get('/', function(req, res) {
        res.render('index', { title: 'Express' });
    })
    .get('/asd', function (req, res) {
        res.send('asdasd');
    });

module.exports = router;
