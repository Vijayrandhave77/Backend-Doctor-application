const mongoose = require('mongoose')

const appoinSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    select:{
        type:String,
        required:true
    },
    dates:{
        type:String,
        required:true
    },
    message:{
        type:String,
    }
})

module.exports = mongoose.model('Appointment', appoinSchema);