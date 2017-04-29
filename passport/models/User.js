/**
 * Created by Nikita on 26.04.2017.
 */

(function () {
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        }
    });

    mongoose.model('user', UserSchema);
})();