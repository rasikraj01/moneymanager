const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        max: 1024
    },
    date :{
        type: Date,
        default : Date.now
    },
    transcations :[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Transaction'
    }]
});

module.exports = mongoose.model('User', userSchema);