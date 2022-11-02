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
        default: "http://localhost:5500/images/kisspng-real-estate-profile-picture-icon-5b4c1135ceddd7.2742655015317117978473.jpg"
    },
    coverImg: {
        type: String,
        default: "http://http://localhost:5500/images/kisspng-real-estate-profile-picture-icon-5b4c1135ceddd7.2742655015317117978473.jpg"
    }

},
    {
        timestamps: true
    }
);

userSchema.plugin(emailUniqueValidator);

module.exports = mongoose.model('users', userSchema);

