const mongoose = require('mongoose')

const contactschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
    }
})
 module.exports = mongoose.model('Contact', contactschema)
