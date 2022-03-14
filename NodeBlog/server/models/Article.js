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
        
    },
    category : {
        type: String,
        enum: ['Noticia', 'Tecnologia', 'Recuerdo'],
        required: 'This fild is required.'
    },
    image : {
        type: String,
        required: 'This fild is required.'
    },
});


articleSchema.index({ name: 'text', description: 'text' });
// WildCard Indexing
//recipeSchema.index({ "$**" : 'text' });
module.exports = mongoose.model('Article', articleSchema);