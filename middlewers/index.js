/**
 * Created by Nikita on 07.05.2017.
 */

const app = require('express')();

app.use(require('./err404'));
app.use(require('./err500'));

module.exports = app;