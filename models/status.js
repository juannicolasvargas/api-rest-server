const { Schema, model } = require('mongoose')

const statusSchema = Schema({
    status: {
        type: String,
        require: true
    }
});

module.exports = model('Status', statusSchema)