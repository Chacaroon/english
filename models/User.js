/**
 * Created by chacaroon on 21.04.17.
 */

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    // Логин
    username:{
        type:String,
        required:[true,"usernameRequired"],
        maxlength:[32,"tooLong"],
        minlength:[6,"tooShort"],
        match:[/^[a-z0-9]+$/,"usernameIncorrect"],
        unique:true
    },
    // Пароль
    password:{
        type:String,
        maxlength:[32,"tooLong"],
        minlength:[8, "tooShort"],
        match:[/^[A-Za-z0-9]$/,"passwordIncorrect"],
        required:[true,"passwordRequired"]
    }
});

module.exports = mongoose.model('User',userSchema);