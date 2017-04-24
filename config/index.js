/**
 * Created by Nikita on 23.04.2017.
 */

const nconf = require('nconf');
const path = require('path');

nconf.argv()
    .env()
    .file({file: path.join(__dirname, '/config.json')});

module.exports = nconf;