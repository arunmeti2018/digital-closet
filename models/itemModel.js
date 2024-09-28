
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ['clothes', 'shoes'],
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
        default: "https://www.shutterstock.com/image-vector/blue-long-sleeve-shirt-isolated-600nw-493279540.jpg",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
    ,
    user: {
        type: mongoose.Schema.Types.ObjectId, // The type is ObjectId
        ref: 'user', // Refers to the 'User' model
        required: true
    }
});


module.exports = mongoose.model("item", itemSchema);
