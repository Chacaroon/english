/**
 * Created by Nikita on 05.05.2017.
 */

const app = new (require('express').Router)();
const fs = require('fs');
let item;

fs.readdir('./router/routes', function (err, items) {
    for (item in items) {
        app.use(require(`./routes/${items[item]}`))
    }
});

module.exports = app;