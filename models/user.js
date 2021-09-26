const { Schema, model } = require('mongoose')

const errorBlankMsg = 'es obligatorio'

const userSchema = Schema({
    name: {
        type: String,
        required: [true, errorBlankMsg]
    },
    email: {
        type: String,
        required: [true, errorBlankMsg]
        // unique: true
    },
    imgUrl: {
        type: String
    },
    password: {
        type: String,
        required: [true, errorBlankMsg]
    },
    status: {
        type: String,
        required: [true, errorBlankMsg],
        enum: ['active', 'inactive', 'archived'],
        default: 'active'
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = model('User', userSchema)