/**
 * Created by Nikita on 05.05.2017.
 */

const app = require('express').Router({
    caseSensitive: false
});
const fs = require('fs');
let item;

app.use(require('express').static('../public'));

fs.readdir('./router/routes', function (err, items) {
    for (item in items) {
        let route = require(`./routes/${items[item]}`);
        if (route.prototype) {
            app.use(route);
        }
    }
});

module.exports = app;