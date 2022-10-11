const mongoose = require('mongoose');
const emailUniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.plugin(emailUniqueValidator);

module.exports = mongoose.model('users', userSchema);

