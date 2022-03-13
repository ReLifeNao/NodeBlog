const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    name : {
        type: String,
        required: 'This fild is required.'
    },
    description : {
        type: String,
        required: 'This fild is required.'
    },
    email : {
        type: String,
        required: 'This fild is required.'
    },
    keywords : {
        type: Array,
        required: 'This fild is required.'
    },
    category : {
        type: String,
        enum: ['Thai', 'Thai2', 'Thai3'],
        required: 'This fild is required.'
    },
    image : {
        type: String,
        required: 'This fild is required.'
    },
});

module.exports = mongoose.model('Article', articleSchema);