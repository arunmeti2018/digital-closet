const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "userNmae required"]
    },

    email: {
        type: String,
        required: [true, "email required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password required"]
    },


    profile: {
        type: String,
        required: [true, "profile required"],
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqr-b4K3tFcRRXLxOuYKOx9kNcWgV80RiaeA&s"
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item'
    }
    ],
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    Donated: {
        type: Number,
        default: 0,
        
    },
    traded: {
        type: Number,
        default: 0
    }

}, { timeStamps: true });

module.exports = mongoose.model("user", userSchema);