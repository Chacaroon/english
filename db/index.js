/**
 * Created by Nikita on 24.04.2017.
 */

const MongoClient = require('mongodb').MongoClient;
const config = require('../config');

let state = {
    db: null
};

module.exports.connect = function (callback) {
    if (state.db) {
        console.log('Imported DB');
        return callback()
    }

    MongoClient.connect(config.get('dbhost'), function (err, db) {
        if (err) return callback(err);

        state.db = db;
        console.log('Connected to DB');
        callback();
    })
};