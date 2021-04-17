const mongoose = require('mongoose');

// HOW DATA IS FORMATTED IN MONGODB
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
