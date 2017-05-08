/**
 * Created by Nikita on 08.05.2017.
 */

const mongoose = require('mongoose');

const vocabSchema = new mongoose.Schema({
    username: String,
    words: mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model('Vocabulary', vocabSchema);