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
        default: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
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

}, { timeStamps: true });

module.exports = mongoose.model("user", userSchema);