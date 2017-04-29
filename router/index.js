
const app = (require('express').Router)();

app.use(require('./main'));
app.use(require('./users'));
app.use(require('./register'));
app.use(require('./login'));

module.exports = app;
