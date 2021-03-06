const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Item', itemSchema);
