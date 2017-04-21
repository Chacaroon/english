/**
 * Created by chacaroon on 21.04.17.
 */

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect("mongodb://Chacaroon:Ukrnet299812@ds133340.mlab.com:33340/heroku_2s9jxmmk",{
    server:{
        poolSize: 10
    }
});

mongoose.connection.on('error', function(err)
{
    console.error("Database Connection Error: " + err);
    console.error('Админ сервер MongoDB Запусти!');
    process.exit(2);
});

mongoose.connection.on('connected', function()
{
    console.info("Succesfully connected to MongoDB Database");
});