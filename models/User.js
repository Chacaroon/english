/**
 * Created by Nikita on 05.05.2017.
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String
        , required: true
        , minlength: 6
        , maxlength: 32
        , match: /^[A-z0-9]+$/
        , unique: true
    },
    password: {
        type: String
        , required: true
        , minlength: 6
        , maxlength: 32
        , match: /^[A-z0-9]+$/
    }
});

module.exports = mongoose.model('User', userSchema);