/**
 * Created by chacaroon on 22.04.17.
 */

const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join()))

app.get('/', function (req, res) {
    res.send('Hello world')
});

app.listen(5000, function (err) {
    if (err) console.log(err);

    console.log('Server started on port on port 5000!')
});