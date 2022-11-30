const mongoose = require('mongoose');
const emailUniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 55,
        trim: true,
    },
    firstname: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 55,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        minlength: 6,
    },
    phoneNumber: {
        type: String,
    },
    phonePro: {
        type: String,
    },
    actualLocation: {
        type: String,
    },
    birthLocation: {
        type: String,
    },
    biography: {
        type: String,
    },
    avatar: {
        type: String,
        default: "http://localhost:5500/images/profile-icon.png",
    },
    coverImg: {
        type: String,
        default: "http://localhost:5500/images/icon-left-font.png",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
},
    {
        timestamps: true
    }
);

userSchema.plugin(emailUniqueValidator);
module.exports = mongoose.model('User', userSchema);

